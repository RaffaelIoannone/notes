export default class Note {
  constructor(
    title,
    description,
    importance,
    dueDate,
    isFinished = false,
    creationDate = new Date()
  ) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
    this.isFinished = isFinished;
    this.creationDate = creationDate;
  }

  static parse(json) {
    const {
      title,
      description,
      importance,
      dueDate,
      isFinished,
      creationDate,
    } = json;
    return new this(title, description, importance, new Date(dueDate), isFinished, new Date(creationDate));
  }
}
