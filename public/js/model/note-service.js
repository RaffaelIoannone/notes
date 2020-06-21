import { sortByCreationDate } from './sorting.js';

export default class NoteService {
  #httpService;

  constructor(httpService) {
    this.#httpService = httpService;
  }

  async addNote(note) {
    try {
      return await this.#httpService.ajax('POST', '/notes', note);
    } catch(e) {
      console.error('Adding note failed.')
    }
  }

  async updateNote(id, note) {
    try {
      return await this.#httpService.ajax('PUT', `/notes/${id}`, note);
    } catch(e) {
      console.error('Update note failed.')
    }
  }

  async removeNote(id) {
    try {
      return await this.#httpService.ajax('DELETE', `/notes/${id}`);
    } catch(e) {
      console.error('Removing note failed.')
    }
  }

  async getNote(id) {
    try {
      return await this.#httpService.ajax('GET', `/notes/${id}`)
    } catch(e) {
      console.error('Getting note failed.')
    }
  }

  async getNotes(sort = sortByCreationDate, sortDirection = 'desc', filterFinished) {
    try {
      const urlSort = `?sort=${sort}:${sortDirection}`;
      const urlFilter = filterFinished ? `&finishDate=null` : '';
      return await this.#httpService.ajax('GET', `/notes${urlSort}${urlFilter}`);
    } catch(e) {
      console.error('Getting notes failed.')
    }
  }
}