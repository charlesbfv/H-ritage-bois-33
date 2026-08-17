import heroAfter from '../assets/images/nettoyage-terrasse-bois-bordeaux.jpg';

import pair1Avant from '../assets/images/entretien-terrasse-bois-avant-1.jpg';
import pair1Apres from '../assets/images/entretien-terrasse-bois-apres-1.jpg';
import differenceCloseup from '../assets/images/nettoyage-terrasse-bois-avant-apres-detail.jpg';
import pair2Avant from '../assets/images/entretien-terrasse-bois-avant-2.jpg';
import pair2Apres from '../assets/images/entretien-terrasse-bois-apres-2.jpg';
import pair3Avant from '../assets/images/entretien-terrasse-bois-avant-3.jpg';
import pair3Apres from '../assets/images/entretien-terrasse-bois-apres-3.jpg';
import pair4Avant from '../assets/images/entretien-terrasse-bois-avant-4.jpg';
import pair4Apres from '../assets/images/entretien-terrasse-bois-apres-4.jpg';
import pair5Avant from '../assets/images/entretien-terrasse-bois-avant-5.jpg';
import pair5Apres from '../assets/images/entretien-terrasse-bois-apres-5.jpg';
import pair6Avant from '../assets/images/entretien-terrasse-bois-avant-6.jpg';
import pair6Apres from '../assets/images/entretien-terrasse-bois-apres-6.jpg';
import pair7Avant from '../assets/images/entretien-terrasse-bois-avant-7.jpg';
import pair7Apres from '../assets/images/entretien-terrasse-bois-apres-7.jpg';
import pair8Avant from '../assets/images/entretien-terrasse-bois-avant-8.jpg';
import pair8Apres from '../assets/images/entretien-terrasse-bois-apres-8.jpg';
import pair9Avant from '../assets/images/entretien-terrasse-bois-avant-9.jpg';
import pair9Apres from '../assets/images/entretien-terrasse-bois-apres-9.jpg';

export interface BeforeAfterPair {
  avant: string;
  apres: string;
  avantAlt: string;
  apresAlt: string;
}

// Photo de fond du hero (page d'accueil)
export const heroImage = heroAfter;

// Photo plein cadre montrant la différence de nettoyage en un coup d'œil
export const differenceImage = differenceCloseup;

function pair(avant: string, apres: string, n: number): BeforeAfterPair {
  return {
    avant,
    apres,
    avantAlt: `Terrasse en bois grisée et sale avant nettoyage par Héritage Bois 33 (Gironde) - exemple ${n}`,
    apresAlt: `Terrasse en bois nettoyée et ravivée après intervention de Héritage Bois 33 (Gironde) - exemple ${n}`,
  };
}

// Paires avant / après mises en avant sur la page d'accueil
export const homePairs: BeforeAfterPair[] = [
  pair(pair1Avant, pair1Apres, 1),
  pair(pair3Avant, pair3Apres, 3),
];

// Paires avant / après présentées sur la page À propos
export const aboutPairs: BeforeAfterPair[] = [
  pair(pair2Avant, pair2Apres, 2),
  pair(pair4Avant, pair4Apres, 4),
  pair(pair5Avant, pair5Apres, 5),
  pair(pair6Avant, pair6Apres, 6),
  pair(pair7Avant, pair7Apres, 7),
  pair(pair8Avant, pair8Apres, 8),
  pair(pair9Avant, pair9Apres, 9),
];
