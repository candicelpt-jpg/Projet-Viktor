import type { SceneVisualTone } from "../types/scene";

export const sceneAtmospheres: Record<SceneVisualTone, string> = {
  awakening:
    "bg-[radial-gradient(circle_at_50%_18%,rgba(246,234,208,0.24),transparent_34%),linear-gradient(180deg,rgba(24,51,39,0.66),rgba(16,37,31,0.94))]",
  identity:
    "bg-[radial-gradient(circle_at_50%_18%,rgba(216,168,79,0.24),transparent_34%),linear-gradient(180deg,rgba(31,76,68,0.68),rgba(16,37,31,0.94))]",
  path:
    "bg-[radial-gradient(circle_at_50%_18%,rgba(126,155,95,0.30),transparent_34%),linear-gradient(180deg,rgba(31,95,104,0.62),rgba(16,37,31,0.94))]",
  house:
    "bg-[radial-gradient(circle_at_50%_18%,rgba(185,111,53,0.26),transparent_34%),linear-gradient(180deg,rgba(66,53,34,0.68),rgba(16,37,31,0.94))]",
  viktor:
    "bg-[radial-gradient(circle_at_50%_18%,rgba(246,234,208,0.30),transparent_34%),linear-gradient(180deg,rgba(78,111,72,0.66),rgba(16,37,31,0.94))]",
};
