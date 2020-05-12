import Note from './modules/note.js';

const noteList = [];
noteList.push(new Note('CAS FEE Selbstudium / Projekt', 'HTML für die note App erstellen. CSS erstellen für die note App', 2, new Date('2020-05-22')));
noteList.push(new Note('Einkaufen', 'Milch, Brot, Salat, Steak', 5, new Date('2020-05-15')));
noteList.forEach((a) => console.log(a));
