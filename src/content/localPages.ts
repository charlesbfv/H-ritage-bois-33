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
  {
    slug: 'le-teich',
    ville: 'Le Teich',
    titleTag: 'Nettoyage de terrasse en bois au Teich | Héritage Bois 33',
    metaDescription:
      "Nettoyage et entretien de terrasse en bois au Teich, au fond du Bassin d'Arcachon. Devis gratuit, intervention rapide.",
    h1: 'Nettoyage de terrasse en bois au Teich',
    intro:
      "Au fond du Bassin d'Arcachon, entre marais et Parc ornithologique, Héritage Bois 33 entretient les terrasses en bois des maisons du Teich exposées à un environnement humide et boisé.",
    contexte: [
      "La proximité des marais et des prés salés typiques du Teich entretient une humidité ambiante élevée toute l'année, propice au développement de mousses et de champignons sur les terrasses peu exposées au soleil, notamment près des zones boisées et des roselières.",
      "Beaucoup de propriétés du Teich profitent d'un cadre naturel préservé, avec des terrasses en bois donnant sur le jardin ou les prés salés : un entretien régulier permet de préserver ce cadre sans compromettre la longévité du bois.",
    ],
    points: [
      "Traitement adapté à l'humidité des zones proches des marais",
      "Élimination des mousses et champignons sur bois peu ensoleillé",
      "Intervention au Teich et dans les hameaux alentour",
    ],
  },
  {
    slug: 'gujan-mestras',
    ville: 'Gujan-Mestras',
    titleTag: 'Nettoyage de terrasse en bois à Gujan-Mestras | Héritage Bois 33',
    metaDescription:
      "Nettoyage et entretien de terrasse en bois à Gujan-Mestras, capitale de l'huître du Bassin d'Arcachon. Devis gratuit.",
    h1: 'Nettoyage de terrasse en bois à Gujan-Mestras',
    intro:
      "Capitale de l'huître avec ses sept ports ostréicoles, Gujan-Mestras compte de nombreuses terrasses en bois proches de l'eau. Héritage Bois 33 leur redonne tout leur éclat.",
    contexte: [
      "Entre les ports ostréicoles et les villas résidentielles, les terrasses en bois de Gujan-Mestras sont exposées à la fois à l'humidité du bassin et, pour certaines, à des projections liées à l'activité conchylicole environnante — un ensemble de contraintes qui accélère l'encrassement du bois.",
      "Que votre terrasse borde un port ostréicole ou se trouve dans un quartier résidentiel plus en retrait, nous adaptons le niveau de traitement à son exposition réelle pour un résultat durable.",
    ],
    points: [
      "Intervention sur toute la commune, des ports ostréicoles aux quartiers résidentiels",
      "Traitement adapté aux terrasses proches de l'eau",
      "Devis gratuit et sans engagement",
    ],
  },
  {
    slug: 'la-teste-de-buch',
    ville: 'La Teste-de-Buch',
    titleTag: 'Nettoyage de terrasse en bois à La Teste-de-Buch | Héritage Bois 33',
    metaDescription:
      "Nettoyage et entretien de terrasse en bois à La Teste-de-Buch, aux portes de la Dune du Pilat. Devis gratuit, intervention rapide.",
    h1: 'Nettoyage de terrasse en bois à La Teste-de-Buch',
    intro:
      "Entre forêt de pins et Dune du Pilat, Héritage Bois 33 entretient les terrasses en bois de La Teste-de-Buch, exposées à la résine, au sable et à un fort passage touristique saisonnier.",
    contexte: [
      "La forêt de pins qui entoure une grande partie de La Teste-de-Buch dépose régulièrement résine et pollen sur les terrasses en bois, formant des taches collantes difficiles à retirer sans un nettoyage adapté.",
      "Avec l'afflux touristique lié à la Dune du Pilat, de nombreuses résidences secondaires ou locations saisonnières ont besoin d'une remise en état ponctuelle de leur terrasse avant l'arrivée des beaux jours ou entre deux locations.",
    ],
    points: [
      "Élimination des dépôts de résine et de pollen propres aux zones boisées",
      "Remise en état rapide pour résidences secondaires et locations saisonnières",
      "Intervention à La Teste-de-Buch, Cazaux et alentours",
    ],
  },
  {
    slug: 'andernos-les-bains',
    ville: 'Andernos-les-Bains',
    titleTag: 'Nettoyage de terrasse en bois à Andernos-les-Bains | Héritage Bois 33',
    metaDescription:
      "Nettoyage et entretien de terrasse en bois à Andernos-les-Bains, sur la rive nord du Bassin d'Arcachon. Devis gratuit.",
    h1: 'Nettoyage de terrasse en bois à Andernos-les-Bains',
    intro:
      "Station balnéaire familiale de la rive nord du Bassin, Andernos-les-Bains compte de nombreuses villas avec terrasse en bois. Héritage Bois 33 les entretient tout au long de l'année.",
    contexte: [
      "Sur la rive nord du Bassin, les terrasses en bois sont exposées à un air marin légèrement moins salin que sur la presqu'île, mais tout aussi propice au grisaillement progressif du bois, notamment sur les villas les plus proches du front de mer et de la jetée.",
      "De nombreuses résidences secondaires familiales à Andernos ne sont occupées que ponctuellement : un entretien programmé avant les vacances scolaires ou la saison estivale permet de profiter d'une terrasse toujours accueillante dès l'arrivée.",
    ],
    points: [
      "Entretien adapté aux terrasses exposées à l'air marin du Bassin",
      "Remise en état avant vacances scolaires et saison estivale",
      "Intervention à Andernos-les-Bains et sur toute la rive nord du Bassin",
    ],
  },
];
