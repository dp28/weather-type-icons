export function applyAll(...functions) {
  return (...args) => functions.forEach(func => func(...args));
}
