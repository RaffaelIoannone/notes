export default class AuthController {
  #authService;
  #noteController;

  constructor(authService, noteController) {
    this.#authService = authService;
    this.#noteController = noteController;
    this.authContainer = document.querySelector('#auth-container');
  }

  init() {
    this.initEventhandlers();
    this.render();
  }

  render() {
    const authorized = this.#authService.isLoggedIn();
    this.authContainer.innerHTML = Handlebars.templates.auth({
      authorized: authorized,
    });
  }

  rerender() {
    this.render();
    this.#noteController.renderNoteList();
  }

  initEventhandlers() {
    this.authContainer.addEventListener('submit', this.auth.bind(this));
  }

  async auth(event) {
    event.preventDefault();
    const targetId = event.target.id; 
    if (targetId === 'form-login') {
      const email = event.target.querySelector('#email').value;
      const password = event.target.querySelector('#password').value;
      await this.#authService.login(email, password);
      this.rerender();
    } else if (targetId === 'form-logout') {
      await this.#authService.logout();
      this.rerender();
    }
  }
}
