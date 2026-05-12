export type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

export type DiceOutcomes = Record<DiceValue, string>;

export type SceneVisualTone =
  | "awakening"
  | "identity"
  | "path"
  | "house"
  | "viktor";

export type Scene = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  objective: string;
  narration: string;
  oralPrompt: string;
  audio?: string;
  visualTone: SceneVisualTone;
  diceOutcomes: DiceOutcomes;
};

export type SceneStep = "narration" | "rolling" | "rolled" | "consequence";
