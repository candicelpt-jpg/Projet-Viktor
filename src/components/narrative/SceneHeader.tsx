import type { Scene } from "../../types/scene";

type SceneHeaderProps = {
  scene: Scene;
};

export function SceneHeader({ scene }: SceneHeaderProps) {
  return (
    <header className="mx-auto max-w-6xl text-center">
      <p className="mb-2 text-xl font-bold uppercase tracking-[0.18em] text-honey">
        Viktor
      </p>
      <h1 className="font-display text-5xl font-bold leading-tight text-parchment sm:text-6xl lg:text-7xl">
        {scene.title}
      </h1>
      <p className="mx-auto mt-3 max-w-3xl text-2xl text-[#fff4d8] sm:text-3xl">
        {scene.subtitle}
      </p>
    </header>
  );
}
