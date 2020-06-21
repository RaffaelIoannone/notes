import { sortByCreationDate, sortByFinishDate, sortByImportance } from '../model/sorting.js';

export default class NoteController {
  #noteService;

  constructor(noteService) {
    this.#noteService = noteService;

    this.noteListContainer = document.querySelector('#note-list-container');
    // this.noteFormContainer = document.querySelector('#note-form-container');

    this.noteListSortSelect = document.querySelector('#sort-select');

    // this.noteForm = document.querySelector('#form-add-note');
    // this.noteFormTitle = document.querySelector('#title');
    // this.noteFormDescription = document.querySelector('#description');
    // this.noteFormImportance = document.querySelector('#importance');
    // this.noteFormDuedate = document.querySelector('#duedate');
  }

  async init() {
    this.initEventHandlers();
    await this.renderNoteList();
  }

  initEventHandlers() {
    // this.noteForm.addEventListener('submit', this.addNote);
    this.noteListSortSelect.addEventListener('change', this.switchListSorting.bind(this));
  }

  async renderNoteList(sortingMethod = 'creationDate') {
    const noteList = await this.#noteService.getNotes(sortingMethod);
    // noteList.sort(sortingMethod);
    this.noteListContainer.innerHTML = Handlebars.templates.noteList({
      notes: noteList,
    });
  }

  // renderNoteForm() {
  //   this.noteFormContainer.innerHTML = Handlebars.templates.addNote();
  // }

  addNote(event) {
    event.preventDefault();
    const note = new Note(
      this.noteFormTitle.value,
      this.noteFormDescription.value,
      this.noteFormImportance.value,
      this.noteFormDuedate.value
    );
    this.#noteService.addNote(note);
    this.renderNoteList();
  }

  switchListSorting() {
    const { selectedIndex } = this.noteListSortSelect;
    const selectedValue = this.noteListSortSelect.options[selectedIndex].value;
    this.renderNoteList(selectedValue);
    // switch (selectedValue) {
    //   case 'creationDate':
    //     this.renderNoteList(sortByCreationDate);
    //     break;
    //   case 'finishDate':
    //     this.renderNoteList(sortByFinishDate);
    //     break;
    //   case 'importance':
    //     this.renderNoteList(sortByImportance);
    //     break;
    //   default:
    //     throw new Error('Unknown sorting algorithm');
    // }
  }
}
