const PRESENT_ENDINGS = {
  "regular-er": ["e", "es", "e", "ons", "ez", "ent"],
  "regular-ir": ["is", "is", "it", "issons", "issez", "issent"],
  "regular-re": ["s", "s", "", "ons", "ez", "ent"]
};

const IMPARFAIT_ENDINGS = ["ais", "ais", "ait", "ions", "iez", "aient"];
const FUTURE_ENDINGS = ["ai", "as", "a", "ons", "ez", "ont"];
const CONDITIONNEL_ENDINGS = ["ais", "ais", "ait", "ions", "iez", "aient"];

export function getPresentForms(verb) {
  const stem = verb.infinitive.slice(0, -2);
  const endings = PRESENT_ENDINGS[verb.conjugationPattern];
  return endings.map((ending, index) => {
    if (verb.id === "manger" && index === 3) return `${stem}eons`;
    return `${stem}${ending}`;
  });
}

export function getImparfaitForms(verb) {
  const presentNous = getPresentForms(verb)[3];
  const stem = presentNous.endsWith("ons") ? presentNous.slice(0, -3) : presentNous;
  return IMPARFAIT_ENDINGS.map((ending) => `${stem}${ending}`);
}

export function getFutureStem(verb) {
  if (verb.conjugationPattern === "regular-re") return verb.infinitive.slice(0, -1);
  return verb.infinitive;
}

export function getFutureForms(verb) {
  const stem = getFutureStem(verb);
  return FUTURE_ENDINGS.map((ending) => `${stem}${ending}`);
}

export function getConditionnelForms(verb) {
  const stem = getFutureStem(verb);
  return CONDITIONNEL_ENDINGS.map((ending) => `${stem}${ending}`);
}

export function getSubjonctifForms(verb) {
  const presentIls = getPresentForms(verb)[5];
  const stem = presentIls.endsWith("ent") ? presentIls.slice(0, -4) : presentIls;
  return ["e", "es", "e", "ions", "iez", "ent"].map((ending) => `${stem}${ending}`);
}
