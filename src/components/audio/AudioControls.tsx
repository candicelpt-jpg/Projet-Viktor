import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "../ui/Button";

type AudioControlsProps = {
  hasAudio: boolean;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
};

export function AudioControls({
  hasAudio,
  isPlaying,
  onPlay,
  onStop,
}: AudioControlsProps) {
  if (!hasAudio) {
    return (
      <div className="rounded-md border border-parchment/20 bg-nightForest/70 px-4 py-3 text-lg text-parchment/80">
        Voix: emplacement prêt
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Button
        aria-label={isPlaying ? "Arrêter la narration" : "Lire la narration"}
        className="min-h-12 px-4"
        onClick={isPlaying ? onStop : onPlay}
        variant="ghost"
      >
        {isPlaying ? <Pause size={26} /> : <Play size={26} />}
      </Button>
      <Button
        aria-label="Rejouer la narration"
        className="min-h-12 px-4"
        onClick={() => {
          onStop();
          onPlay();
        }}
        variant="ghost"
      >
        <RotateCcw size={26} />
      </Button>
    </div>
  );
}
