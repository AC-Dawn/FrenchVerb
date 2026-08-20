import { compareAnswer } from "../utils/normalization.js";

export function gradeSimpleItem(item, accentChecking) {
  const fullForm = compareAnswer(item.answers.fullForm, item.expected.answerForm, accentChecking);
  return { ...item, grading: { fullForm, overallCorrect: fullForm.correct } };
}

export function gradeCompoundBlock(block, accentChecking, mode) {
  const auxiliary = mode === "select-auxiliary"
    ? compareAnswer(block.answers.auxiliarySelection, block.expected.auxiliaryLemma, "strict")
    : Object.fromEntries(Object.entries(block.expected.auxiliaryForms).map(([personId, expected]) => [personId, compareAnswer(block.answers.auxiliaryInputs[personId], expected, "strict")]));
  const auxiliaryCorrect = mode === "select-auxiliary" ? auxiliary.correct : Object.values(auxiliary).every((result) => result.correct);
  const pastParticiple = compareAnswer(block.answers.pastParticiple, block.expected.pastParticiple, accentChecking);
  return { ...block, grading: { auxiliary, pastParticiple, auxiliaryCorrect, pastParticipleCorrect: pastParticiple.correct, overallCorrect: auxiliaryCorrect && pastParticiple.correct } };
}

export function gradeAll(exerciseData, accentChecking, mode) {
  return {
    simpleItems: exerciseData.simpleItems.map((item) => gradeSimpleItem(item, accentChecking)),
    compoundBlocks: exerciseData.compoundBlocks.map((block) => gradeCompoundBlock(block, accentChecking, mode))
  };
}
