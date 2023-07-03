import React, { useState } from 'react';

const CommentContainer = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <h2>Comentarios</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          placeholder="Escribe un comentario..."
        />
        <button type="submit">Agregar comentario</button>
      </form>
    </div>
  );
};

export default CommentContainer;

