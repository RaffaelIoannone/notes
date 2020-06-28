export default class SettingsController {
  noteService;
  authService;
  noteController;
  authController;

  constructor(noteService, authService, noteController, authController) {
    this.noteService = noteService;
    this.authService = authService;
    this.noteController = noteController;
    this.authController = authController;

    this.body = document.querySelector('body');

    this.showSettingsButton = document.querySelector('#show-settings');
    this.settingsContainer = document.querySelector('#settings-container');
  }

  async init() {
    this.render();
    this.initEventHandlers();
  }

  initEventHandlers() {
    this.showSettingsButton.addEventListener(
      'click',
      this.openSettingsModal.bind(this)
    );

    this.settingsContainer.addEventListener(
      'click',
      this.handleActionOnModal.bind(this)
    );

    this.settingsContainer.addEventListener(
      'change',
      this.switchListSorting.bind(this)
    );
  }

  render() {
    const input = {
      darkThemeOn: this.isDarkThemeOn(),
      showFinishedNotesOn: this.isShowFinishedNotesOn(),
    };
    this.settingsContainer.innerHTML = Handlebars.templates.settings(input);
  }

  rerenderAuth() {
    this.authController.rerender();
  }

  rerenderNoteList() {
    this.noteController.renderNoteList();
  }


  openSettingsModal() {
    this.render();
    this.settingsContainer.showModal();
  }

  handleActionOnModal(event) {
    const action = event.target.dataset.action;
    if (action !== undefined) {
      if (action === 'changeTheme') {
        this.changeTheme();
      } else if (action === 'logout') {
        this.logout();
      } else if (action === 'toggleFinishedNotes') {
        this.toggleFinishedNotes();
      } else if (action === 'close') {
        this.settingsContainer.close();
      } else {
        throw new Error(`Unknown action: ${action}`)
      }
    }
  }

  changeTheme() {
    this.body.classList.toggle('light-theme');
    this.body.classList.toggle('dark-theme');
    this.render();
  }

  isDarkThemeOn() {
    return this.body.classList.contains('dark-theme');
  }

  toggleFinishedNotes() {
    this.noteService.toggleFinishedNotes();
    this.render();
    this.rerenderNoteList();
  }

  isShowFinishedNotesOn() {
    return this.noteService.isShowFinishedNotesOn();
  }

  async logout() {
    await this.authService.logout();
    this.rerenderAuth();
    this.settingsContainer.close();
  }

  switchListSorting(event) {
    if (event.target.id === 'sort-select') {
      const noteListSortSelect = document.querySelector('#sort-select');
      const selectedValue = noteListSortSelect.options[noteListSortSelect.selectedIndex].value;
      this.noteService.setSortAlgorithm(selectedValue);
      this.rerenderNoteList();
    }
  }
}
