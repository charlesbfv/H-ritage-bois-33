# Héritage Bois 33 — Site vitrine

Site vitrine pour Héritage Bois 33, spécialiste du nettoyage de terrasses en
bois (Bordeaux et Bassin d'Arcachon). React + Vite + Tailwind CSS.

## Démarrer en local

```bash
npm install
npm run dev
```

## Ajouter les photos

Les emplacements photo sont pour le moment des placeholders (encadrés avec un
numéro et une description). Pour insérer une vraie photo :

1. Dépose le fichier image dans `src/assets/images/` (ex : `home-1.jpg`).
2. Ouvre `src/content/images.ts`.
3. Importe l'image en haut du fichier : `import home1 from '../assets/images/home-1.jpg';`
4. Remplace le `src: null` correspondant par `src: home1`.

L'ordre des entrées dans `homeImages` et `aboutImages` correspond à l'ordre
d'affichage sur le site (page d'accueil et page À propos).

## Pages

- `/` — Accueil
- `/prestations` — Détail des 3 prestations et tarification
- `/a-propos` — Présentation de l'entreprise + galerie photo
- `/contact` — Formulaire de devis, coordonnées, avis clients

## Build de production

```bash
npm run build
```

Génère le site statique dans `dist/`.
