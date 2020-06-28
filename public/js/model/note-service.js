import { sortByCreationDate, sortByDueDate, sortByImportance } from './sorting.js';
import Note from './note.js';
import ValueStorage from './value-storage.js';

export default class NoteService {
  showFinishedNotesKey = 'finishedNotes';
  sortAlgorithm = 'sortAlgorithm';
  httpService;

  constructor(httpService) {
    this.httpService = httpService;
  }

  async addNote(note) {
    try {
      return await this.httpService.ajax('POST', '/notes', note);
    } catch (e) {
      console.error('Adding note failed.');
    }
  }

  async updateNote(id, note) {
    try {
      return await this.httpService.ajax('PUT', `/notes/${id}`, note);
    } catch (e) {
      console.error('Update note failed.');
    }
  }

  async removeNote(id) {
    try {
      return await this.httpService.ajax('DELETE', `/notes/${id}`);
    } catch (e) {
      console.error('Removing note failed.');
    }
  }

  async getNote(id) {
    try {
      return await this.httpService.ajax('GET', `/notes/${id}`);
    } catch (e) {
      console.error('Getting note failed.');
    }
  }

  async getNotes() {
    try {
      const rawResult = await this.httpService.ajax('GET', '/notes');
      let result = rawResult.map((note) => {
        return Note.parse(note);
      });
      if (!this.isShowFinishedNotesOn()) {
        result = result.filter((notes) => {
          return ! notes.isFinished;
        });
      }
  
      result.sort(this.getSortAlgorithm());

      return result;
    } catch (e) {
      console.error('Getting notes failed.' + e);
    }
  }

  isShowFinishedNotesOn() {
    return Boolean(ValueStorage.getItem(this.showFinishedNotesKey));
  }

  toggleFinishedNotes() {
    ValueStorage.setItem(
      this.showFinishedNotesKey,
      !this.isShowFinishedNotesOn()
    );
  }

  getSortAlgorithm() {
    const key = ValueStorage.getItem(this.sortAlgorithm);
    if (key === 'dueDate') {
      return sortByDueDate;
    } else if (key === 'importance') {
      return sortByImportance;
    } else {
      return sortByCreationDate;
    } 
  }

  setSortAlgorithm(algorithm) {
    ValueStorage.setItem(this.sortAlgorithm, algorithm);
  }
}
