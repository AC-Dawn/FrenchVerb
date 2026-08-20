import { PERSONS } from "../data/persons.js";
import { getConditionnelForms, getFutureForms, getImparfaitForms, getPresentForms, getSubjonctifForms } from "./rules.js";
import { applyJeElision } from "./elision.js";

const AVOIR_FORMS = ["ai", "as", "a", "avons", "avez", "ont"];
const ETRE_FORMS = ["suis", "es", "est", "sommes", "êtes", "sont"];
const ALLER_FORMS = ["vais", "vas", "va", "allons", "allez", "vont"];

function getFormsByRule(verb, rule) {
  switch (rule) {
    case "present": return getPresentForms(verb);
    case "imparfait": return getImparfaitForms(verb);
    case "futur-simple": return getFutureForms(verb);
    case "conditionnel-present": return getConditionnelForms(verb);
    case "subjonctif-present": return getSubjonctifForms(verb);
    default: throw new Error(`Unsupported conjugation rule: ${rule}`);
  }
}

export function getAuxiliaryForms(auxiliary) {
  return auxiliary === "être" ? ETRE_FORMS : AVOIR_FORMS;
}

export function conjugateSimple(verb, tense, personIndex) {
  if (tense.conjugationRule === "futur-proche") {
    const allerForm = ALLER_FORMS[personIndex];
    return `${allerForm} ${verb.infinitive}`;
  }

  const forms = getFormsByRule(verb, tense.conjugationRule);
  return forms[personIndex];
}

export function conjugateCompound(verb, tense, personIndex, auxiliary = verb.defaultAuxiliary) {
  const auxiliaryForm = getAuxiliaryForms(auxiliary)[personIndex];
  const auxiliaryWithSubject = personIndex === 0
    ? applyJeElision("je", auxiliaryForm)
    : `${PERSONS[personIndex].displayName} ${auxiliaryForm}`;
  return {
    auxiliaryLemma: auxiliary,
    auxiliaryForm,
    pastParticiple: verb.pastParticiple,
    fullForm: `${auxiliaryWithSubject} ${verb.pastParticiple}`
  };
}

export function getConjugation(verb, tense, personIndex) {
  if (tense.type === "compound") return conjugateCompound(verb, tense, personIndex);
  const predicate = conjugateSimple(verb, tense, personIndex);
  const fullForm = personIndex === 0
    ? applyJeElision("je", predicate)
    : `${PERSONS[personIndex].displayName} ${predicate}`;
  return { answerForm: predicate, fullForm };
}

export function getRecognizedForms(verb) {
  const forms = new Set([verb.infinitive, verb.pastParticiple]);
  ["present", "imparfait", "futur-simple", "conditionnel-present", "subjonctif-present"].forEach((rule) => {
    getFormsByRule(verb, rule).forEach((form) => forms.add(form));
  });
  return [...forms];
}
