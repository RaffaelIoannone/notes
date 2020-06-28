import './view/template.js';
import NoteService from './model/note-service.js';
import NoteController from './controller/note-controller.js';
import HttpService from './model/http-service.js';
import AuthService from './model/auth-service.js';
import AuthController from './controller/auth-controller.js';
import SettingsController from './controller/settings-controller.js';

function main() {
  const httpService = new HttpService();
  const authService = new AuthService(httpService);
  const noteService = new NoteService(httpService);

  const noteController = new NoteController(noteService, authService);
  noteController.init();

  const authController = new AuthController(authService, noteController);
  authController.init();

  const settingsController = new SettingsController(noteService, authService, noteController, authController);
  settingsController.init();
}

document.addEventListener('DOMcontentLoaded', main());

