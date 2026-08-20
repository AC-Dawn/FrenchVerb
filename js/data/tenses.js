export const TENSES = [
  { id: "present", displayName: "Présent", description: "现在时", colorToken: "present", type: "simple", answerSlots: ["full-form"], conjugationRule: "present" },
  { id: "passe-compose", displayName: "Passé composé", description: "复合过去时", colorToken: "passe-compose", type: "compound", answerSlots: ["auxiliary", "past-participle"], conjugationRule: "passe-compose" },
  { id: "imparfait", displayName: "Imparfait", description: "未完成过去时", colorToken: "imparfait", type: "simple", answerSlots: ["full-form"], conjugationRule: "imparfait" },
  { id: "plus-que-parfait", displayName: "Plus-que-parfait", description: "愈过去时", colorToken: "plus-que-parfait", type: "compound", answerSlots: ["auxiliary", "past-participle"], conjugationRule: "plus-que-parfait" },
  { id: "futur-proche", displayName: "Futur proche", description: "最近将来时", colorToken: "futur-proche", type: "simple", answerSlots: ["full-form"], conjugationRule: "futur-proche" },
  { id: "futur-simple", displayName: "Futur simple", description: "简单将来时", colorToken: "futur-simple", type: "simple", answerSlots: ["full-form"], conjugationRule: "futur-simple" },
  { id: "conditionnel-present", displayName: "Conditionnel présent", description: "现在条件式", colorToken: "conditionnel", type: "simple", answerSlots: ["full-form"], conjugationRule: "conditionnel-present" },
  { id: "subjonctif-present", displayName: "Subjonctif présent", description: "现在虚拟式", colorToken: "subjonctif", type: "simple", answerSlots: ["full-form"], conjugationRule: "subjonctif-present" }
];

export const TENSE_BY_ID = new Map(TENSES.map((tense) => [tense.id, tense]));
