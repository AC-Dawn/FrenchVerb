import { VERBS } from "../data/verbs.js";
import { getRecognizedForms } from "../conjugation/conjugator.js";
import { normalizeBasic } from "./normalization.js";

const SEPARATOR_PATTERN = /[,;.\n]+/;

export function parseVerbInput(value) {
  const tokens = value.split(SEPARATOR_PATTERN).map((token) => token.trim()).filter(Boolean);
  const seen = new Set();
  const recognized = [];
  const unrecognized = [];

  for (const token of tokens) {
    const key = normalizeBasic(token);
    if (seen.has(key)) continue;
    seen.add(key);
    const verb = VERBS.find((candidate) => normalizeBasic(candidate.infinitive) === key);
    if (verb) {
      recognized.push(verb.id);
      continue;
    }
    const matchingVerb = VERBS.find((candidate) => getRecognizedForms(candidate).some((form) => normalizeBasic(form) === key));
    if (matchingVerb) recognized.push(matchingVerb.id);
    else unrecognized.push(token);
  }

  return { recognized, unrecognized };
}

export function appendUniqueVerbIds(currentIds, nextIds) {
  const result = [...currentIds];
  for (const id of nextIds) if (!result.includes(id)) result.push(id);
  return result;
}
