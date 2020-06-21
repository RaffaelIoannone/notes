export default class Note {
  constructor(
    title,
    description,
    importance,
    dueDate,
    finishDate = null,
    creationDate = new Date(),
  ) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
    this.finishDate = finishDate;
    this.creationDate = creationDate;
  }
}
