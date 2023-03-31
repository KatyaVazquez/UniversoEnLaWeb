const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
