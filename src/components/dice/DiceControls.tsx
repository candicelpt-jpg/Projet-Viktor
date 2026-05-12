import { Dices, Eye } from "lucide-react";
import type { DiceValue, SceneStep } from "../../types/scene";
import { Button } from "../ui/Button";

type DiceControlsProps = {
  diceValue: DiceValue | null;
  step: SceneStep;
  onRoll: () => void;
  onReveal: () => void;
};

export function DiceControls({
  diceValue,
  step,
  onRoll,
  onReveal,
}: DiceControlsProps) {
  const canRoll = step === "narration" || step === "consequence";
  const canReveal = step === "rolled" && diceValue !== null;

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button disabled={!canRoll} onClick={onRoll}>
        <Dices size={30} />
        Lancer le dé
      </Button>
      <Button disabled={!canReveal} onClick={onReveal} variant="secondary">
        <Eye size={30} />
        Révéler
      </Button>
    </div>
  );
}
