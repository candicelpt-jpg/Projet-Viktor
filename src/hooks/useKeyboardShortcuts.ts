import { useEffect } from "react";

type ShortcutHandlers = {
  onRoll: () => void;
  onReveal: () => void;
};

export function useKeyboardShortcuts({ onRoll, onReveal }: ShortcutHandlers) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (isTyping) return;

      if (event.code === "Space") {
        event.preventDefault();
        onRoll();
      }

      if (event.code === "Enter") {
        event.preventDefault();
        onReveal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onReveal, onRoll]);
}
