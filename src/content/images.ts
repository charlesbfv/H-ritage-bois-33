// Registre centralisé des photos du site.
// Pour ajouter une photo : dépose le fichier dans src/assets/images/
// puis importe-le ici et remplace la valeur `null` correspondante.
//
// Exemple :
//   import home1 from '../assets/images/home-1.jpg';
//   home1,
//
// L'ordre des clés = l'ordre d'affichage sur la page.

export interface ImageSlot {
  src: string | null;
  alt: string;
}

export const homeImages: ImageSlot[] = [
  { src: null, alt: 'Terrasse en bois nettoyée par Héritage Bois 33' },
  { src: null, alt: 'Terrasse en bois avant nettoyage' },
  { src: null, alt: 'Terrasse en bois après nettoyage' },
  { src: null, alt: 'Intervention de nettoyage de terrasse en bois' },
];

export const aboutImages: ImageSlot[] = [
  { src: null, alt: 'Héritage Bois 33 — photo 1' },
  { src: null, alt: 'Héritage Bois 33 — photo 2' },
  { src: null, alt: 'Héritage Bois 33 — photo 3' },
  { src: null, alt: 'Héritage Bois 33 — photo 4' },
  { src: null, alt: 'Héritage Bois 33 — photo 5' },
  { src: null, alt: 'Héritage Bois 33 — photo 6' },
  { src: null, alt: 'Héritage Bois 33 — photo 7' },
  { src: null, alt: 'Héritage Bois 33 — photo 8' },
];
