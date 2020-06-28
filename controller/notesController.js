import { noteStore } from '../services/noteStore';
import SecurityUtil from '../utils/security';

export default class NotesController {
  static async getNotes(req, res) {
    const currentUser = SecurityUtil.currentUser(req);
    res.json(await noteStore.all(currentUser) || []);
  }

  static async createNote(req, res) {
    const currentUser = SecurityUtil.currentUser(req);
    const note = req.body;
    note.user = currentUser;
    res.json(await noteStore.add(note));
  }


  static async updateNote(req, res) {
    const currentUser = SecurityUtil.currentUser(req);
    const note = req.body;
    note.user = currentUser;
    res.json(await noteStore.update(req.params.id, note, currentUser));
  }

  static async showNote(req, res) {
    const currentUser = SecurityUtil.currentUser(req);
    res.json(await noteStore.get(req.params.id, currentUser(req)));
  }

  static async deleteNote(req, res) {
    const currentUser = SecurityUtil.currentUser(req);
    res.json(await noteStore.delete(req.params.id, currentUser(req)));
  }
}
