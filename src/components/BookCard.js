import React from 'react';
import axios from 'axios';
import '../styles.css';

  // const url = 'http://localhost:5000/'; //For local host
  const url = 'https://finalexamapi-rus0.onrender.com/' //For render.com

function BookCard({ book, onDelete }) {
  const handleDelete = () => {
    axios.delete(`${url}${book._id}`)
      .then(() => {
        onDelete(book._id); // Update local state to remove the deleted book
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };

  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Book Cover"
        height="200"
      />
      <div className="desc">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
          X
        </button>
    </div>
  );
}

export default BookCard;
