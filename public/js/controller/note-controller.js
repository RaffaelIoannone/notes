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
  }

  async renderNoteList(sortingMethod = 'creationDate') {
    let noteList = [];
    if (this.authService.isLoggedIn()) {
      noteList = await this.noteService.getNotes(sortingMethod);
    }
    this.noteListContainer.innerHTML = Handlebars.templates.noteList({
      notes: noteList,
    });
  }

  renderNoteForm() {
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
}
