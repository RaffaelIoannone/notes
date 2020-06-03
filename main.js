import Note from './modules/note.js';

const noteList = [];
noteList.push(
  new Note('Einkaufen', 'Milch, Brot, Salat, Steak', 5, new Date('2020-05-15'))
);
noteList.forEach((a) => console.log(a));


const form = document.getElementById('form-add-note');
const title = document.getElementById('title');
const description = document.getElementById('description');
const importance = document.getElementById('importance');
const duedate = document.getElementById('duedate');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  noteList.push(
    new Note(title.value, description.value, importance.value, duedate.value)
  );
  noteList.forEach((a) => console.log(a));
});

const themeSelect = document.getElementById('theme-select');
themeSelect.addEventListener('change', () => {
  const classes = [...document.body.classList];
  classes.filter((classname) => classname.includes('-theme'))
    .forEach((classname) => document.body.classList.toggle(classname));
  document.body.classList.toggle(themeSelect.options[themeSelect.selectedIndex].value);
});
