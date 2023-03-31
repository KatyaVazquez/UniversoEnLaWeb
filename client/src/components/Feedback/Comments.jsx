import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RemoveButton from './RemoveButton';
import './Comments.css';

const Comments = (refresh) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/comments');
      setComments(response.data.comments);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [refresh]);

  const removeComment = (id) => {
    const newComments = comments.filter((comment) => comment._id !== id);
    setComments(newComments);
  };

  const handleRemoveClick = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/comments/${id}`);
      if (response.status === 204) {
        const newComments = comments.filter((comment) => comment._id !== id);
        setComments(newComments);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div className="comment" key={comment._id}>
          <h3>{comment.name}</h3>
          <p>{comment.commentText}</p>
          <RemoveButton
            className="remove-button"
            onClick={() => handleRemoveClick(comment._id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Comments;
