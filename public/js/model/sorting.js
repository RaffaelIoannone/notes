export function sortByDueDate(a, b) {
  return b.dueDate - a.dueDate;
}

export function sortByCreationDate(a, b) {
  return b.creationDate - a.creationDate;
}

export function sortByImportance(a, b) {
  return b.importance - a.importance;
}
