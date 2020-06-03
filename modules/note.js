class Note {
  constructor(title, desscription, importance, dueDate, finishDate = null) {
    this.title = title;
    this.desscription = desscription;
    this.importance = importance;
    this.dueDate = dueDate;
    this.finishDate = finishDate;
  }
}

export default Note;
