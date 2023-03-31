
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment.model');
const commentsController = require('../controllers/comment.controller');

router.post('/comments', async (req, res) => {
const { name, commentText } = req.body;
const newComment = new Comment({
name,
commentText,
});
try {
const savedComment = await newComment.save();
res.json(savedComment);
} catch (error) {
console.error(error);
res.status(500).send('Error al guardar el comentario en la base de datos.');
}
});

// Get all comments
router.delete('/comments/:id', commentsController.deleteComment);
router.get('/comments', commentsController.getAllComments);


module.exports = router;