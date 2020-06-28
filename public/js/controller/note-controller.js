import Note from '../model/note.js';
import '../view/customHelpers.js';

export default class NoteController {
  noteService;
  authService;

  constructor(noteService, authService) {
    this.noteService = noteService;
    this.authService = authService;

    this.noteListContainer = document.querySelector('#note-list-container');

    this.noteFormButton = document.querySelector('#add-note');
    this.noteFormContainer = document.querySelector('#note-form-container');
  }

  async init() {
    this.initEventHandlers();
    await this.renderNoteList();
  }

  initEventHandlers() {
    this.noteFormContainer.addEventListener('submit', this.addNote.bind(this));

    this.noteFormButton.addEventListener(
      'click',
      this.openAddNoteModal.bind(this)
    );

    this.noteListContainer.addEventListener(
      'click',
      this.handleActionOnNote.bind(this)
    );
  }

  async renderNoteList() {
    let noteList = [];
    if (this.authService.isLoggedIn()) {
      noteList = await this.noteService.getNotes();
    }
    this.noteListContainer.innerHTML = Handlebars.templates.noteList({
      notes: noteList,
    });
  }

  renderNoteForm() {
    const input = {
      note: undefined,
      action: 'create',
    };
    this.noteFormContainer.innerHTML = Handlebars.templates.addNote();
  }

  addNote(event) {
    event.preventDefault();
    const note = new Note(
      document.querySelector('#title').value,
      document.querySelector('#description').value,
      document.querySelector('input[name="importance"]:checked').value,
      document.querySelector('#duedate').value
    );
    this.noteService.addNote(note);
    this.renderNoteList();
  }

  openAddNoteModal() {
    this.renderNoteForm();
    this.noteFormContainer.showModal();
  }

  async handleActionOnNote(event) {
    const action = event.target.dataset.action;
    if (action !== undefined) {
      const id = event.target.dataset.id;
      if (action === 'toggleFinish') {
        await this.toggleFinish(id);
      } else if (action === 'delete') {
        await this.deleteNote(id);
      } else if (action === 'edit') {
        await this.editNote(id);
      } else {
        console.log(action);
      }
    }
  }

  async toggleFinish(id) {
    const element = await this.noteService.getNote(id);
    element.isFinished = !element.isFinished;
    const result = await this.noteService.updateNote(id, element);
    await this.renderNoteList();
  }

  async deleteNote(id) {
    await this.noteService.removeNote(id);
    await this.renderNoteList();
  }

  async editNote(id) {
    this.openEditNoteModal();
  }

  openEditNoteModal() {
    this.renderNoteForm();
    this.noteFormContainer.showModal();
  }
}
