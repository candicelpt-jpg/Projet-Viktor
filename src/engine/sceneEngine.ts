import type { DiceValue, Scene } from "../types/scene";

export function getSceneByIndex(scenes: Scene[], index: number): Scene {
  return scenes[Math.max(0, Math.min(index, scenes.length - 1))];
}

export function getDiceOutcome(scene: Scene, value: DiceValue): string {
  return scene.diceOutcomes[value];
}

export function rollD6(): DiceValue {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

export function getNextSceneIndex(currentIndex: number, sceneCount: number): number {
  return Math.min(currentIndex + 1, sceneCount - 1);
}

export function getPreviousSceneIndex(currentIndex: number): number {
  return Math.max(currentIndex - 1, 0);
}
