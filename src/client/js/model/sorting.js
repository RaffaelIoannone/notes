export function sortByFinishDate(a, b) {
  return b.finishDate - a.finishDate;
}

export function sortByCreationDate(a, b) {
  return b.creationDate - a.creationDate;
}

export function sortByImportance(a, b) {
  return b.importance - a.importance;
}
