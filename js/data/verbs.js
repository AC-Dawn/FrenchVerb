export const VERBS = [
  { id: "parler", infinitive: "parler", group: "er", conjugationPattern: "regular-er", pastParticiple: "parlé", defaultAuxiliary: "avoir" },
  { id: "aimer", infinitive: "aimer", group: "er", conjugationPattern: "regular-er", pastParticiple: "aimé", defaultAuxiliary: "avoir" },
  { id: "travailler", infinitive: "travailler", group: "er", conjugationPattern: "regular-er", pastParticiple: "travaillé", defaultAuxiliary: "avoir" },
  { id: "habiter", infinitive: "habiter", group: "er", conjugationPattern: "regular-er", pastParticiple: "habité", defaultAuxiliary: "avoir" },
  { id: "regarder", infinitive: "regarder", group: "er", conjugationPattern: "regular-er", pastParticiple: "regardé", defaultAuxiliary: "avoir" },
  { id: "écouter", infinitive: "écouter", group: "er", conjugationPattern: "regular-er", pastParticiple: "écouté", defaultAuxiliary: "avoir" },
  { id: "étudier", infinitive: "étudier", group: "er", conjugationPattern: "regular-er", pastParticiple: "étudié", defaultAuxiliary: "avoir" },
  { id: "chercher", infinitive: "chercher", group: "er", conjugationPattern: "regular-er", pastParticiple: "cherché", defaultAuxiliary: "avoir" },
  { id: "jouer", infinitive: "jouer", group: "er", conjugationPattern: "regular-er", pastParticiple: "joué", defaultAuxiliary: "avoir" },
  { id: "manger", infinitive: "manger", group: "er", conjugationPattern: "regular-er", pastParticiple: "mangé", defaultAuxiliary: "avoir" },
  { id: "finir", infinitive: "finir", group: "ir", conjugationPattern: "regular-ir", pastParticiple: "fini", defaultAuxiliary: "avoir" },
  { id: "choisir", infinitive: "choisir", group: "ir", conjugationPattern: "regular-ir", pastParticiple: "choisi", defaultAuxiliary: "avoir" },
  { id: "réussir", infinitive: "réussir", group: "ir", conjugationPattern: "regular-ir", pastParticiple: "réussi", defaultAuxiliary: "avoir" },
  { id: "grandir", infinitive: "grandir", group: "ir", conjugationPattern: "regular-ir", pastParticiple: "grandi", defaultAuxiliary: "avoir" },
  { id: "vendre", infinitive: "vendre", group: "re", conjugationPattern: "regular-re", pastParticiple: "vendu", defaultAuxiliary: "avoir" },
  { id: "attendre", infinitive: "attendre", group: "re", conjugationPattern: "regular-re", pastParticiple: "attendu", defaultAuxiliary: "avoir" },
  { id: "répondre", infinitive: "répondre", group: "re", conjugationPattern: "regular-re", pastParticiple: "répondu", defaultAuxiliary: "avoir" },
  { id: "perdre", infinitive: "perdre", group: "re", conjugationPattern: "regular-re", pastParticiple: "perdu", defaultAuxiliary: "avoir" }
];

export const VERB_BY_ID = new Map(VERBS.map((verb) => [verb.id, verb]));
