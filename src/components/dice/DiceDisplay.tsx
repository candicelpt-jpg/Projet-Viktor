import { motion } from "framer-motion";
import type { DiceValue, SceneStep } from "../../types/scene";
import { classNames } from "../../utils/classNames";

type DiceDisplayProps = {
  value: DiceValue | null;
  step: SceneStep;
};

const faces: Record<DiceValue, string> = {
  1: "⚀",
  2: "⚁",
  3: "⚂",
  4: "⚃",
  5: "⚄",
  6: "⚅",
};

export function DiceDisplay({ value, step }: DiceDisplayProps) {
  const isRolling = step === "rolling";
  const display = value ? faces[value] : "□";

  return (
    <motion.div
      animate={isRolling ? { rotate: [0, -8, 9, -5, 0], scale: [1, 1.04, 0.98, 1] } : {}}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className={classNames(
        "grid aspect-square w-36 place-items-center rounded-lg border-4 border-[#6f5630]/45 bg-parchment text-8xl leading-none text-ink shadow-paper sm:w-44 sm:text-9xl",
        isRolling && "bg-[#fff1c8]",
      )}
      aria-live="polite"
      role="status"
    >
      <span className={isRolling ? "animate-pulse" : ""}>{isRolling ? "?" : display}</span>
    </motion.div>
  );
}
