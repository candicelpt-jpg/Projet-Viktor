import { MessageCircle } from "lucide-react";
import type { Scene } from "../../types/scene";
import { PaperPanel } from "../ui/PaperPanel";

type NarrativeCardProps = {
  scene: Scene;
};

export function NarrativeCard({ scene }: NarrativeCardProps) {
  return (
    <PaperPanel className="max-w-4xl">
      <p className="mb-3 text-lg font-bold uppercase tracking-[0.12em] text-ember">
        Objectif oral
      </p>
      <p className="text-2xl font-bold leading-snug sm:text-3xl">{scene.objective}</p>
      <div className="my-5 h-px bg-[#6f5630]/25" />
      <p className="text-2xl leading-snug sm:text-3xl">{scene.narration}</p>
      <div className="mt-5 flex gap-4 rounded-md bg-white/55 p-4">
        <MessageCircle className="mt-1 shrink-0 text-moss" size={34} />
        <p className="text-2xl font-bold leading-snug sm:text-3xl">
          {scene.oralPrompt}
        </p>
      </div>
    </PaperPanel>
  );
}
