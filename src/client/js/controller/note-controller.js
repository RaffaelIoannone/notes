import { sortByCreationDate, sortByFinishDate, sortByImportance } from '../model/sorting.js';

export default class NoteController {
  noteService;

  constructor(noteService) {
    this.noteService = noteService;

    this.noteListContainer = document.querySelector('#note-list-container');

    this.noteListSortSelect = document.querySelector('#sort-select');

  }

  init() {
    this.initEventHandlers();
    this.renderNoteList();
  }

  initEventHandlers() {
    this.noteListSortSelect.addEventListener('change', this.switchListSorting.bind(this));
  }

  renderNoteList(sortingMethod = sortByCreationDate) {
    const noteList = this.noteService.getNotes();
    noteList.sort(sortingMethod);
    this.noteListContainer.innerHTML = Handlebars.templates.noteList({
      notes: noteList,
    });
  }


  addNote(event) {
    event.preventDefault();
    const note = new Note(
      this.noteFormTitle.value,
      this.noteFormDescription.value,
      this.noteFormImportance.value,
      this.noteFormDuedate.value
    );
    this.noteService.addNote(note);
    this.renderNoteList();
  }

  switchListSorting() {
    const { selectedIndex } = this.noteListSortSelect;
    const selectedValue = this.noteListSortSelect.options[selectedIndex].value;
    switch (selectedValue) {
      case 'creationDate':
        this.renderNoteList(sortByCreationDate);
        break;
      case 'finishDate':
        this.renderNoteList(sortByFinishDate);
        break;
      case 'importance':
        this.renderNoteList(sortByImportance);
        break;
      default:
        throw new Error('Unknown sorting algorithm');
    }
  }
}
