class Note {
  constructor(title, desscription, importance, finishedUntil, finished = false) {
    this.title = title;
    this.desscription = desscription;
    this.importance = importance;
    this.finishedUntil = finishedUntil;
    this.finished = finished;
  }
}

export default Note;
