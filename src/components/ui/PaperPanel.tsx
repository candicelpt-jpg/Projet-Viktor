import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

type PaperPanelProps = {
  children: ReactNode;
  className?: string;
};

export function PaperPanel({ children, className }: PaperPanelProps) {
  return (
    <section
      className={classNames(
        "rounded-lg border-2 border-[#6f5630]/35 bg-parchment/95 p-5 text-ink shadow-paper backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </section>
  );
}
