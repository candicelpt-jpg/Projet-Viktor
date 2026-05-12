# Viktor

Viktor est un support narratif immersif pour cours d'oral FLE A2-B1. L'application est pensée pour être projetée par l'enseignant pendant une séance en direct.

Les élèves ne manipulent pas l'interface. L'enseignant, dans le rôle de Viktor, contrôle le rythme de la scène, lance le dé, révèle la conséquence, puis laisse la classe produire à l'oral.

## MVP inclus

- Navigation entre 5 scènes pédagogiques.
- Scènes pilotées par données dans `src/data/scenes.ts`.
- Dé virtuel à 6 faces avec résultat aléatoire.
- Rythme séparé: lancer du dé, résultat visible, puis révélation de la conséquence après validation.
- Raccourcis clavier:
  - `Espace`: lancer le dé.
  - `Entrée`: révéler la conséquence après le résultat.
- Système audio prêt avec Howler.js.
- Interface lisible en projection, inspirée parchemin / forêt magique / carnet narratif.
- Framer Motion installé et utilisé pour des transitions douces.
- Configuration compatible Vercel et hébergement statique.

## Installation

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

Sur Vercel, le projet peut être déployé comme application Vite statique. Le fichier `vercel.json` redirige les routes SPA vers `index.html`.

## Modifier les scènes

Les scènes sont définies dans:

```txt
src/data/scenes.ts
```

Chaque scène contient:

- `title`
- `subtitle`
- `objective`
- `narration`
- `oralPrompt`
- `diceOutcomes`
- `visualTone`
- `audio` optionnel

Quand les fichiers voix seront disponibles, placez-les dans `public/audio/`, puis ajoutez par exemple:

```ts
audio: "/audio/awakening.mp3"
```

## Agents de conception

- `orchestrator-agent`: cohérence globale et arbitrages.
- `architecture-agent`: structure, typage, état, modularité.
- `ui-agent`: composants réutilisables et interface projetable.
- `art-direction-agent`: palette, ambiance scrapbook, lisibilité.
- `narrative-agent`: scènes, narration, conséquences.
- `dice-agent`: hasard, animation, séparation résultat / conséquence.
- `audio-agent`: Howler.js, relecture, arrêt au changement de scène.
- `pedagogy-agent`: charge cognitive, objectifs A2-B1, oral.
- `animation-agent`: base Framer Motion pour transitions futures.
- `qa-agent`: clavier, responsive, build statique.
- `git-agent`: branches, commits, publication GitHub.

## Notes pédagogiques

L'écran doit toujours soutenir la parole, jamais la remplacer. Les textes restent courts, lisibles, et centrés sur une action orale claire.
