export interface LocalPageContent {
  slug: string;
  ville: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  intro: string;
  contexte: string[];
  points: string[];
}

export const localPages: LocalPageContent[] = [
  {
    slug: 'bordeaux',
    ville: 'Bordeaux',
    titleTag: 'Nettoyage de terrasse en bois à Bordeaux | Héritage Bois 33',
    metaDescription:
      "Nettoyage et entretien de terrasse en bois à Bordeaux et son agglomération (Mérignac, Pessac, Talence, Bègles, Le Bouscat...). Devis gratuit, intervention rapide.",
    h1: 'Nettoyage de terrasse en bois à Bordeaux',
    intro:
      "Héritage Bois 33 intervient à Bordeaux et dans toute son agglomération pour redonner à vos terrasses en bois leur éclat d'origine — jardins, cours intérieures, terrasses de bar ou de restaurant.",
    contexte: [
      "Le climat océanique de Bordeaux, avec ses pluies fréquentes et son taux d'humidité élevé, favorise l'apparition de mousses, lichens et taches vertes sur les terrasses en bois exposées à l'ombre ou peu ventilées — un phénomène particulièrement visible dans les jardins arborés typiques des quartiers résidentiels bordelais.",
      "Que vous soyez à Bordeaux même ou dans l'agglomération (Mérignac, Pessac, Talence, Bègles, Le Bouscat, Villenave-d'Ornon...), nous adaptons notre intervention à la configuration de votre extérieur : petites cours de ville, grandes terrasses de maisons de la métropole, ou espaces extérieurs professionnels.",
    ],
    points: [
      "Intervention dans Bordeaux et toute la métropole bordelaise",
      "Traitement adapté aux terrasses ombragées, plus sujettes aux mousses",
      "Solutions pour particuliers, copropriétés et professionnels (bars, restaurants, hôtels)",
    ],
  },
  {
    slug: 'arcachon',
    ville: 'Arcachon',
    titleTag: 'Nettoyage de terrasse en bois à Arcachon | Héritage Bois 33',
    metaDescription:
      "Nettoyage et entretien de terrasse en bois à Arcachon et sur le Bassin. Spécialiste du bois exposé à l'air marin. Devis gratuit.",
    h1: 'Nettoyage de terrasse en bois à Arcachon',
    intro:
      'Sur le Bassin d\'Arcachon, le bois des terrasses est mis à rude épreuve par l\'air marin. Héritage Bois 33 redonne éclat et protection aux terrasses exposées au climat côtier.',
    contexte: [
      "L'air chargé en embruns salins accélère le grisaillement naturel du bois et favorise le dépôt de sel et de sable sur les lames de terrasse — un phénomène que l'on retrouve sur la plupart des villas arcachonnaises, qu'elles soient au Moulleau, à Pyla-sur-Mer ou au centre-ville.",
      "Beaucoup de résidences secondaires du bassin n'étant occupées qu'une partie de l'année, un nettoyage avant la saison estivale permet de retrouver une terrasse impeccable pour profiter pleinement des beaux jours, sans les taches et le grisaillement accumulés pendant l'hiver.",
    ],
    points: [
      "Expertise du bois exposé à l'air marin et aux embruns",
      "Remise en état avant la saison estivale pour les résidences secondaires",
      "Intervention à Arcachon, Le Moulleau, Pyla-sur-Mer et alentours",
    ],
  },
  {
    slug: 'cap-ferret',
    ville: 'Cap Ferret',
    titleTag: 'Nettoyage de terrasse en bois au Cap Ferret | Héritage Bois 33',
    metaDescription:
      "Nettoyage et entretien de terrasse en bois au Cap Ferret. Spécialiste des bois exotiques (ipé, teck) exposés au sable et à l'air marin. Devis gratuit.",
    h1: 'Nettoyage de terrasse en bois au Cap Ferret',
    intro:
      "Les villas du Cap Ferret disposent souvent de belles terrasses en bois exotique. Héritage Bois 33 propose un entretien adapté à ces essences nobles et à leur environnement particulier.",
    contexte: [
      "Entre pins, sable et air iodé, les terrasses du Cap Ferret sont exposées à des contraintes spécifiques : résine des pins, sable fin qui s'incruste entre les lames, et humidité saline qui accélère le grisaillement, y compris sur les bois exotiques comme l'ipé ou le teck, réputés pourtant très résistants.",
      "Pour les propriétés de bord de bassin ou proches de l'océan, nous privilégions des méthodes de nettoyage respectueuses de ces bois précieux, afin de préserver leur teinte et leur longévité tout en éliminant les dépôts accumulés.",
    ],
    points: [
      "Entretien adapté aux bois exotiques (ipé, teck, cumaru)",
      "Élimination du sable et de la résine incrustés entre les lames",
      "Intervention sur toute la presqu'île, côté bassin comme côté océan",
    ],
  },
];
