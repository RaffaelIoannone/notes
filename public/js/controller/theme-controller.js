export default class ThemeController {
  constructor() {
    this.themeSelect = document.querySelector('#theme-select');
    this.body = document.querySelector('body');
  }

  init() {
    this.themeSelect.addEventListener('change', this.changeTheme.bind(this));
  }

  changeTheme() {
    const { selectedIndex } = this.themeSelect;
    const selectedValue = this.themeSelect.options[selectedIndex].value;
    const bodyClassList = this.body.classList;
    [...bodyClassList]
      .filter((classname) => classname.includes('-theme'))
      .forEach((classname) => bodyClassList.toggle(classname));
    bodyClassList.toggle(selectedValue);
  }
}
