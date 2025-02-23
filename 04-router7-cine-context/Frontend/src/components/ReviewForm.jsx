import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert('Por favor selecciona una calificación');
      return;
    }

    const review = {
      rating,
      comment,
      name,
      date: new Date().toISOString()
    };

    onSubmit(review);
    
    // Limpiar el formulario
    setRating(0);
    setComment('');
    setName('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Deja tu reseña</h3>
      
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            type="button"
            key={star}
            className={`star ${star <= rating ? 'active' : ''}`}
            onClick={() => setRating(star)}
          >
            ★
          </button>
        ))}
      </div>

      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="comment">Comentario:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="submit-button">
        Enviar Reseña
      </button>
    </form>
  );
};

export default ReviewForm;
