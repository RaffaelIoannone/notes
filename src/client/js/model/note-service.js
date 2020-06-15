import { sortByCreationDate } from './sorting.js';

export default class NoteService {
  #noteList = [];

  addNote(note) {
    this.#noteList.push(note);
  }

  removeNote() {

  }

  updateNote() {

  }

  getNotes(sort = sortByCreationDate, filterFinished) {
    return this.#noteList;
  }
}