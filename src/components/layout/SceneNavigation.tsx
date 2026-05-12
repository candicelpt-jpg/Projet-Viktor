import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

type SceneNavigationProps = {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
};

export function SceneNavigation({
  current,
  total,
  onPrevious,
  onNext,
}: SceneNavigationProps) {
  return (
    <nav className="flex items-center justify-between gap-3" aria-label="Navigation des scènes">
      <Button
        aria-label="Scène précédente"
        className="min-h-12 px-4"
        disabled={current === 0}
        onClick={onPrevious}
        variant="ghost"
      >
        <ChevronLeft size={28} />
      </Button>
      <div className="rounded-md border border-parchment/25 bg-nightForest/70 px-5 py-3 text-center text-xl font-bold text-parchment">
        Scène {current + 1} / {total}
      </div>
      <Button
        aria-label="Scène suivante"
        className="min-h-12 px-4"
        disabled={current === total - 1}
        onClick={onNext}
        variant="ghost"
      >
        <ChevronRight size={28} />
      </Button>
    </nav>
  );
}
