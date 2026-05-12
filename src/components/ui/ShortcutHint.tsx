import type { ReactNode } from "react";

type ShortcutHintProps = {
  icon: ReactNode;
  label: string;
  keys: string;
};

export function ShortcutHint({ icon, label, keys }: ShortcutHintProps) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-parchment/25 bg-nightForest/70 px-4 py-3 text-parchment">
      <span className="text-honey" aria-hidden="true">
        {icon}
      </span>
      <span className="text-lg">{label}</span>
      <kbd className="rounded border border-parchment/35 bg-parchment/15 px-3 py-1 text-base font-bold">
        {keys}
      </kbd>
    </div>
  );
}
