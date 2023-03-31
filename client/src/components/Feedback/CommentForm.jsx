import React, { useState } from 'react';
import axios from 'axios';
import Comments from './Comments';
import './CommentForm.css'


const CommentForm = () => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [refresh, setRefresh]=useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/comments', {
        name,
        commentText,
      });
      console.log(response.data);
      setName('');
      setCommentText('');
      setRefresh(!refresh)
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div className='body'>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Subject:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="commentText">Comment:</label>
        <textarea
          id="commentText"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    <Comments refresh= {refresh} />
    </div>
  );
};

export default CommentForm;
