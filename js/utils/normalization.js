export function normalizeBasic(value) {
  return value.trim().toLocaleLowerCase("fr-FR");
}

export function removeDiacritics(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function compareAnswer(userValue, expectedValue, accentChecking = "strict") {
  const user = normalizeBasic(userValue);
  const expected = normalizeBasic(expectedValue);
  const exactMatch = user === expected;
  const normalizedUser = removeDiacritics(user);
  const normalizedExpected = removeDiacritics(expected);
  const normalizedMatch = normalizedUser === normalizedExpected;
  const accentDifference = !exactMatch && normalizedMatch;
  const spellingDifference = !exactMatch && !normalizedMatch;
  const correct = exactMatch || (accentChecking === "ignore" && normalizedMatch);

  return {
    userAnswer: userValue,
    expectedAnswer: expectedValue,
    exactMatch,
    normalizedMatch,
    accentDifference,
    spellingDifference,
    correct
  };
}
