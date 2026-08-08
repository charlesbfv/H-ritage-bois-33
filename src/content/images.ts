import heroAfter from '../assets/images/hero-after.jpg';

import pair1Avant from '../assets/images/pair1-avant.jpg';
import pair1Apres from '../assets/images/pair1-apres.jpg';
import differenceCloseup from '../assets/images/difference-closeup.jpg';
import pair2Avant from '../assets/images/pair2-avant.jpg';
import pair2Apres from '../assets/images/pair2-apres.jpg';
import pair3Avant from '../assets/images/pair3-avant.jpg';
import pair3Apres from '../assets/images/pair3-apres.jpg';
import pair4Avant from '../assets/images/pair4-avant.jpg';
import pair4Apres from '../assets/images/pair4-apres.jpg';
import pair5Avant from '../assets/images/pair5-avant.jpg';
import pair5Apres from '../assets/images/pair5-apres.jpg';
import pair6Avant from '../assets/images/pair6-avant.jpg';
import pair6Apres from '../assets/images/pair6-apres.jpg';
import pair7Avant from '../assets/images/pair7-avant.jpg';
import pair7Apres from '../assets/images/pair7-apres.jpg';
import pair8Avant from '../assets/images/pair8-avant.jpg';
import pair8Apres from '../assets/images/pair8-apres.jpg';
import pair9Avant from '../assets/images/pair9-avant.jpg';
import pair9Apres from '../assets/images/pair9-apres.jpg';

export interface BeforeAfterPair {
  avant: string;
  apres: string;
}

// Photo de fond du hero (page d'accueil)
export const heroImage = heroAfter;

// Photo plein cadre montrant la différence de nettoyage en un coup d'œil
export const differenceImage = differenceCloseup;

// Paires avant / après mises en avant sur la page d'accueil
export const homePairs: BeforeAfterPair[] = [
  { avant: pair1Avant, apres: pair1Apres },
  { avant: pair3Avant, apres: pair3Apres },
];

// Paires avant / après présentées sur la page À propos
export const aboutPairs: BeforeAfterPair[] = [
  { avant: pair2Avant, apres: pair2Apres },
  { avant: pair4Avant, apres: pair4Apres },
  { avant: pair5Avant, apres: pair5Apres },
  { avant: pair6Avant, apres: pair6Apres },
  { avant: pair7Avant, apres: pair7Apres },
  { avant: pair8Avant, apres: pair8Apres },
  { avant: pair9Avant, apres: pair9Apres },
];
