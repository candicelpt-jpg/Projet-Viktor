import type { Scene } from "../types/scene";

export const scenes: Scene[] = [
  {
    id: "awakening",
    order: 1,
    title: "Le réveil",
    subtitle: "La forêt ouvre les yeux",
    objective: "Réagir à une situation étrange avec des phrases simples.",
    narration:
      "La classe se réveille dans une clairière douce. La lumière traverse les branches. Au loin, une voix murmure: « Vous êtes attendus. »",
    oralPrompt:
      "Que voyez-vous ? Comment vous sentez-vous ? Répondez avec une phrase courte et claire.",
    visualTone: "awakening",
    diceOutcomes: {
      1: "Un bruit sec résonne derrière vous. Quelqu’un doit expliquer ce qu’il fait.",
      2: "Une feuille dorée tombe dans la main d’un élève. Il ou elle décrit l’objet.",
      3: "Le vent forme un mot dans l’air. La classe propose une hypothèse.",
      4: "Un petit chemin apparaît. Chaque groupe dit s’il veut avancer ou attendre.",
      5: "Une silhouette passe entre les arbres. Un élève pose une question à voix haute.",
      6: "La clairière s’illumine. La classe gagne une information utile: Viktor connaît vos noms.",
    },
  }
];
