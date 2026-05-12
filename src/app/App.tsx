import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Keyboard, Volume2 } from "lucide-react";
import { AppShell } from "../components/layout/AppShell";
import { SceneNavigation } from "../components/layout/SceneNavigation";
import { AudioControls } from "../components/audio/AudioControls";
import { DiceControls } from "../components/dice/DiceControls";
import { DiceDisplay } from "../components/dice/DiceDisplay";
import { ConsequenceCard } from "../components/narrative/ConsequenceCard";
import { NarrativeCard } from "../components/narrative/NarrativeCard";
import { SceneHeader } from "../components/narrative/SceneHeader";
import { ShortcutHint } from "../components/ui/ShortcutHint";
import { scenes } from "../data/scenes";
import {
  getDiceOutcome,
  getNextSceneIndex,
  getPreviousSceneIndex,
  getSceneByIndex,
  rollD6,
} from "../engine/sceneEngine";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useNarrationAudio } from "../hooks/useNarrationAudio";
import { sceneAtmospheres } from "../scenes/atmospheres";
import type { DiceValue, SceneStep } from "../types/scene";

const ROLL_DURATION_MS = 950;

export function App() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [step, setStep] = useState<SceneStep>("narration");
  const [diceValue, setDiceValue] = useState<DiceValue | null>(null);
  const [consequence, setConsequence] = useState<string | null>(null);
  const rollTimeout = useRef<number | null>(null);

  const scene = getSceneByIndex(scenes, sceneIndex);
  const { isPlaying, play, stop } = useNarrationAudio({
    src: scene.audio,
    autoplay: false,
  });

  const resetSceneFlow = useCallback(() => {
    if (rollTimeout.current) {
      window.clearTimeout(rollTimeout.current);
      rollTimeout.current = null;
    }

    setStep("narration");
    setDiceValue(null);
    setConsequence(null);
  }, []);

  const handleRoll = useCallback(() => {
    if (step === "rolling") return;

    resetSceneFlow();
    setStep("rolling");

    rollTimeout.current = window.setTimeout(() => {
      const nextValue = rollD6();
      setDiceValue(nextValue);
      setStep("rolled");
      rollTimeout.current = null;
    }, ROLL_DURATION_MS);
  }, [resetSceneFlow, step]);

  const handleReveal = useCallback(() => {
    if (step !== "rolled" || diceValue === null) return;

    setConsequence(getDiceOutcome(scene, diceValue));
    setStep("consequence");
  }, [diceValue, scene, step]);

  const handleNextScene = useCallback(() => {
    setSceneIndex((current) => getNextSceneIndex(current, scenes.length));
    resetSceneFlow();
    stop();
  }, [resetSceneFlow, stop]);

  const handlePreviousScene = useCallback(() => {
    setSceneIndex((current) => getPreviousSceneIndex(current));
    resetSceneFlow();
    stop();
  }, [resetSceneFlow, stop]);

  useKeyboardShortcuts({
    onRoll: handleRoll,
    onReveal: handleReveal,
  });

  useEffect(() => {
    return () => {
      if (rollTimeout.current) {
        window.clearTimeout(rollTimeout.current);
      }
    };
  }, []);

  const statusText = useMemo(() => {
    if (step === "rolling") return "Le dé tourne...";
    if (step === "rolled" && diceValue) return `Résultat: ${diceValue}`;
    if (step === "consequence") return "À vous de parler";
    return "Prêt pour la scène";
  }, [diceValue, step]);

  return (
    <AppShell atmosphereClass={sceneAtmospheres[scene.visualTone]}>
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl flex-col gap-5">
        <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-wrap gap-3">
            <ShortcutHint icon={<Keyboard size={24} />} keys="Espace" label="Dé" />
            <ShortcutHint icon={<ArrowRight size={24} />} keys="Entrée" label="Suite" />
          </div>
          <AudioControls
            hasAudio={Boolean(scene.audio)}
            isPlaying={isPlaying}
            onPlay={play}
            onStop={stop}
          />
          <SceneNavigation
            current={sceneIndex}
            onNext={handleNextScene}
            onPrevious={handlePreviousScene}
            total={scenes.length}
          />
        </div>

        <SceneHeader scene={scene} />

        <section className="grid flex-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex justify-center lg:justify-start">
            {step === "consequence" && consequence ? (
              <ConsequenceCard oralPrompt={scene.oralPrompt} text={consequence} />
            ) : (
              <NarrativeCard scene={scene} />
            )}
          </div>

          <aside className="flex flex-col items-center gap-5 rounded-lg border border-parchment/25 bg-nightForest/80 p-5 shadow-paper backdrop-blur-sm">
            <div className="flex items-center gap-3 text-center text-2xl font-bold text-parchment">
              <Volume2 className="text-honey" size={28} />
              {statusText}
            </div>
            <DiceDisplay step={step} value={diceValue} />
            <DiceControls
              diceValue={diceValue}
              onReveal={handleReveal}
              onRoll={handleRoll}
              step={step}
            />
          </aside>
        </section>

        <footer className="rounded-md border border-parchment/20 bg-nightForest/70 px-5 py-3 text-center text-lg text-parchment/85">
          Une scène, une action, une phrase à dire. Viktor garde le rythme, la classe garde la parole.
        </footer>
      </div>
    </AppShell>
  );
}
