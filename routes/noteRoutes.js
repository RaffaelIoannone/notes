import express from 'express';
import NotesController from '../controller/notesController';

const router = express.Router();

router.post('/', NotesController.createNote);
router.put('/:id/', NotesController.updateNote);
router.get('/', NotesController.getNotes);
router.get('/:id/', NotesController.showNote);
router.delete('/:id/', NotesController.deleteNote);

export const noteRoutes = router;
