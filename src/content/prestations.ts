export interface Prestation {
  title: string;
  description: string;
  benefits: string[];
  icon: 'droplet' | 'sparkle' | 'shield';
}

export const prestations: Prestation[] = [
  {
    title: 'Nettoyage simple à eau + balayage',
    description:
      "Un nettoyage à l'eau claire et un balayage soigné pour enlever la poussière, les feuilles et les saletés superficielles de votre terrasse.",
    benefits: [
      'Entretien régulier et préventif',
      'Terrasse propre et accueillante au quotidien',
      'Solution rapide et économique',
    ],
    icon: 'droplet',
  },
  {
    title: 'Nettoyage avec produits + balayage',
    description:
      'Un traitement en profondeur avec des produits adaptés pour les bois sales, tachés ou marqués par le temps et les intempéries.',
    benefits: [
      'Élimination des taches et salissures incrustées',
      'Action contre les mousses et micro-organismes',
      "Redonne de l'éclat au bois",
    ],
    icon: 'sparkle',
  },
  {
    title: 'Nettoyage + produits + balayage + dégriseur',
    description:
      "Notre prestation la plus complète : nettoyage en profondeur suivi de l'application d'un dégriseur pour redonner à votre terrasse son aspect d'origine.",
    benefits: [
      "Aspect du bois neuf retrouvé",
      'Protection renforcée et durable',
      'Idéal pour les terrasses très grisées',
    ],
    icon: 'shield',
  },
];
