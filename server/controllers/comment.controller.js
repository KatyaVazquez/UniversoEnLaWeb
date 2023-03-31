  const Comment = require('../models/comment.model');

  const createComment = async (req, res) => {
    try {
      const { name, commentText } = req.body;
      const newComment = await Comment.create({
        name,
        commentText,
        id
      });
      res.status(201).json({ comment: newComment });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  const getAllComments = async (req, res) => {
    try {
      const comments = await Comment.find();
      res.status(200).json({ comments });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  const deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedComment = await Comment.findByIdAndDelete(id);
      if (!deletedComment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.status(204).json({ message: 'Comment deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  
  const getCommentById = async (req, res) => {
    try {
      const comments = await Comment.find({ id: req.params.id });
      res.status(200).json({ comments });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  module.exports = {
    createComment,
    getAllComments,
    deleteComment,
  };


