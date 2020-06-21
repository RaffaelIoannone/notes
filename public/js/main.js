import './view/template.js';
import NoteService from './model/note-service.js';
import NoteController from './controller/note-controller.js';
import ThemeController from './controller/theme-controller.js';
import HttpService from './model/http-service.js';
import AuthService from './model/auth-service.js';
import AuthController from './controller/auth-controller.js';

function main() {
  const httpService = new HttpService();
  const authService = new AuthService(httpService);
  const noteService = new NoteService(httpService);

  const noteController = new NoteController(noteService);
  noteController.init();
  new AuthController(authService, noteController).init();
  new ThemeController().init();
}

document.addEventListener('DOMcontentLoaded', main());

// document.querySelector('#addNote').innerHTML = Handlebars.templates.addNote();
// const form = document.getElementById('form-add-note');
// const title = document.getElementById('title');
// const description = document.getElementById('description');
// const importance = document.getElementById('importance');
// const duedate = document.getElementById('duedate');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   noteList.push(
//     new Note(title.value, description.value, importance.value, duedate.value),
//   );
// });
