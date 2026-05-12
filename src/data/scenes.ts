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
  },
  {
    id: "who-are-you",
    order: 2,
    title: "Qui êtes-vous ?",
    subtitle: "Les noms dans le carnet",
    objective: "Se présenter et poser des questions d’identité.",
    narration:
      "Un carnet ancien s’ouvre tout seul. Les pages sont vides, mais une plume attend les réponses de la classe.",
    oralPrompt:
      "Présentez un personnage: nom, âge, origine, caractère. Puis posez une question à un autre groupe.",
    visualTone: "identity",
    diceOutcomes: {
      1: "La plume refuse d’écrire. Il faut répéter la présentation plus lentement.",
      2: "Le carnet demande un détail: une ville, une nationalité ou une langue.",
      3: "Une tache d’encre devient un portrait. Décrivez le visage et le caractère.",
      4: "Le carnet accepte la réponse et ajoute une question personnelle.",
      5: "Une page brille: un autre personnage veut répondre et comparer.",
      6: "Le carnet révèle un symbole. Le groupe peut inventer un talent spécial.",
    },
  },
  {
    id: "right-path",
    order: 3,
    title: "Le bon chemin",
    subtitle: "Trois routes, une décision",
    objective: "Exprimer des préférences et justifier un choix.",
    narration:
      "Trois chemins se séparent devant vous: un sentier lumineux, une route couverte de mousse, et un passage silencieux.",
    oralPrompt:
      "Quel chemin choisissez-vous ? Dites votre préférence et donnez une raison.",
    visualTone: "path",
    diceOutcomes: {
      1: "Le chemin choisi disparaît un instant. Il faut convaincre la forêt avec une bonne raison.",
      2: "Un panneau ancien donne deux indices contradictoires. La classe débat.",
      3: "Une voix demande: « Pourquoi ce chemin ? » Un élève répond pour le groupe.",
      4: "Le sentier devient plus clair. Chaque groupe ajoute un argument.",
      5: "Une lanterne apparaît. Elle suit le groupe qui explique le mieux son choix.",
      6: "La forêt accepte la décision. Vous avancez sans danger vers la maison.",
    },
  },
  {
    id: "old-house",
    order: 4,
    title: "La vieille maison",
    subtitle: "Une porte et beaucoup de secrets",
    objective: "Décrire un lieu et parler d’activités ou d’habitudes.",
    narration:
      "Une maison ancienne attend au milieu des arbres. Les fenêtres brillent comme des yeux curieux.",
    oralPrompt:
      "Décrivez la maison. Imaginez ce qu’on peut faire à l’intérieur.",
    visualTone: "house",
    diceOutcomes: {
      1: "La porte grince et se referme. Il faut demander poliment d’entrer.",
      2: "Une odeur de pain chaud arrive de la cuisine. Décrivez ce que vous aimez manger.",
      3: "Le salon change de forme. Nommez trois objets et leur position.",
      4: "Une horloge parle de loisirs. Chaque groupe dit une activité qu’il aime.",
      5: "Un panier contient un indice. Il faut expliquer à quoi il sert.",
      6: "La maison vous reconnaît comme invités. Elle ouvre une pièce secrète.",
    },
  },
  {
    id: "viktor",
    order: 5,
    title: "Viktor en personne",
    subtitle: "La rencontre",
    objective: "Interagir, réagir et construire une présentation complète.",
    narration:
      "Au centre de la pièce secrète, un arbre ancien ouvre les yeux. Sa voix est calme: « Je suis Viktor. Et vous ? »",
    oralPrompt:
      "Présentez votre groupe à Viktor. Réagissez à ses questions et demandez-lui quelque chose.",
    visualTone: "viktor",
    diceOutcomes: {
      1: "Viktor ne comprend pas tout. Reformulez avec des phrases plus simples.",
      2: "Viktor demande un exemple personnel à un élève.",
      3: "Viktor compare vos réponses et invite la classe à réagir.",
      4: "Viktor sourit. Il demande une question complète avec « pourquoi ».",
      5: "Viktor partage un secret. La classe doit résumer l’information.",
      6: "Viktor vous remercie. Chaque groupe donne une phrase finale pour terminer l’histoire.",
    },
  },
];
