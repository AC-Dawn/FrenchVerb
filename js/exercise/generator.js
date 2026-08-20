import { PERSONS } from "../data/persons.js";
import { VERB_BY_ID } from "../data/verbs.js";
import { TENSE_BY_ID } from "../data/tenses.js";
import { getAuxiliaryForms, getConjugation } from "../conjugation/conjugator.js";
import { applyJeElision } from "../conjugation/elision.js";

export function createExerciseItems(selectedVerbIds, selectedTenseIds) {
  const simpleItems = [];
  const compoundBlocks = [];
  selectedVerbIds.forEach((verbId) => {
    const verb = VERB_BY_ID.get(verbId);
    selectedTenseIds.forEach((tenseId) => {
      const tense = TENSE_BY_ID.get(tenseId);
      if (tense.type === "compound") {
        const auxiliaryForms = getAuxiliaryForms(verb.defaultAuxiliary);
        compoundBlocks.push({
          id: `${verb.id}:${tense.id}`,
          verbId: verb.id,
          tenseId: tense.id,
          expected: {
            auxiliaryLemma: verb.defaultAuxiliary,
            pastParticiple: verb.pastParticiple,
            auxiliaryForms: Object.fromEntries(PERSONS.map((person, index) => [person.id, auxiliaryForms[index]]))
          },
          answers: {
            auxiliarySelection: "",
            auxiliaryInputs: Object.fromEntries(PERSONS.map((person) => [person.id, ""])),
            pastParticiple: ""
          },
          generatedForms: Object.fromEntries(PERSONS.map((person) => [person.id, ""])),
          applied: false,
          grading: null
        });
        return;
      }
      PERSONS.forEach((person, personIndex) => {
        simpleItems.push({
          id: `${verb.id}:${tense.id}:${person.id}`,
          verbId: verb.id,
          tenseId: tense.id,
          personId: person.id,
          expected: getConjugation(verb, tense, personIndex),
          answers: { fullForm: "" },
          grading: null
        });
      });
    });
  });
  return { simpleItems, compoundBlocks };
}

export function applyCompoundBlock(block, mode) {
  const selectedForms = mode === "select-auxiliary" && block.answers.auxiliarySelection
    ? getAuxiliaryForms(block.answers.auxiliarySelection)
    : [];
  const generatedForms = Object.fromEntries(PERSONS.map((person, index) => {
    const auxiliaryForm = mode === "select-auxiliary" ? selectedForms[index] : block.answers.auxiliaryInputs[person.id];
    if (!auxiliaryForm || !block.answers.pastParticiple) return [person.id, ""];
    const subjectAndAuxiliary = person.id === "je" ? applyJeElision("je", auxiliaryForm) : `${person.displayName} ${auxiliaryForm}`;
    const auxiliaryPhrase = subjectAndAuxiliary.replace(/^(?:je |j'|tu |il\/elle\/on |nous |vous |ils\/elles )/, "");
    return [person.id, `${auxiliaryPhrase} ${block.answers.pastParticiple}`];
  }));
  return { ...block, generatedForms, applied: true };
}
