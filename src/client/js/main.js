import './view/template.js';
import Note from './model/note.js';
import NoteService from './model/note-service.js';
import NoteController from './controller/note-controller.js';
import ThemeController from './controller/theme-controller.js';

function main() {
  const noteService = new NoteService();

  const note1 = new Note('Einkaufen 3', 'Milch, Brot, Salat, Steak', 1, new Date('2020-03-15'), new Date('2020-04-15'));
  noteService.addNote(note1);
  const note2 = new Note('Einkaufen', 'Milch, Brot, Salat, Steak', 4, new Date('2020-05-15'), new Date('2020-05-15'));
  noteService.addNote(note2);
  const note3 = new Note('Einkaufen 2', 'Milch, Brot, Salat, Steak', 5, new Date('2020-04-15'), new Date('2020-03-15'));
  noteService.addNote(note3);

  new NoteController(noteService).init();
  new ThemeController().init();
}

document.addEventListener('DOMcontentLoaded', main());

document.querySelector('#nodeList').innerHTML = Handlebars.templates.noteList();
