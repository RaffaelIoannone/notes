import Datastore from 'nedb-promise';

export class NoteStore {
  constructor(db) {
    this.db = db || new Datastore({ filename: './data/notes.db', autoload: true });
  }

  async add(note) {
    return this.db.insert(note);
  }

  async update(id, note, currentUser) {
    await this.db.update({ _id: id, user: currentUser }, { $set: note });
    return this.get(id, currentUser);
  }

  async delete(id, currentUser) {
    return this.db.remove(
      { _id: id, user: currentUser },
    );
  }

  async get(id, currentUser) {
    return this.db.findOne({ _id: id, user: currentUser });
  }

  async all(currentUser) {
    return this.db.cfind({ user: currentUser }).exec();
  }
}

export const noteStore = new NoteStore();
