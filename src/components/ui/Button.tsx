import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ember text-white shadow-lg shadow-ember/20 hover:bg-[#a76131] focus-visible:outline-ember",
  secondary:
    "bg-parchment text-ink shadow-insetPaper hover:bg-[#fff2d6] focus-visible:outline-honey",
  ghost:
    "bg-white/10 text-parchment hover:bg-white/18 focus-visible:outline-parchment",
};

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "inline-flex min-h-14 items-center justify-center gap-3 rounded-md px-6 py-3 text-xl font-bold transition disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4",
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
