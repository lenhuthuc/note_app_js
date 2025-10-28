const express = require('express');
const router = express.Router();
const NoteController = require('../controller/note.controller');
const { authMiddlewares } = require('../middlewares/auth.middlewares');

router.get('/note', authMiddlewares, NoteController.getMainInterface);
router.post('/note', authMiddlewares, NoteController.CreateNote);
router.patch('/note/:id', authMiddlewares, NoteController.UpdateNote);
router.delete('/note/:id', authMiddlewares, NoteController.DeleteNote);

module.exports = router;