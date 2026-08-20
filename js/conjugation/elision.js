const ELISION_STARTS = /^[aeiouyàâäéèêëîïôöùûüÿh]/i;

export function applyJeElision(person, form) {
  if (person !== "je" || !ELISION_STARTS.test(form)) return `je ${form}`;
  return `j'${form}`;
}
