export function getAccentHint(expected, user) {
  const userCharacters = [...user];
  return [...expected].map((character, index) => ({
    character,
    hint: character !== userCharacters[index]
  }));
}
