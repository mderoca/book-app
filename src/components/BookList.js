import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import '../styles.css';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error('Error fetching books:', err);
      });
  }, []);

  const handleDelete = (deletedId) => {
    setBooks(books.filter(book => book._id !== deletedId));
  };

  const bookList = books.map((book, index) => (
    <BookCard book={book} key={index} onDelete={handleDelete} />
  ));

  // const bookList = books.length === 0
  //   ? <p>There are no books in the list.</p>
  //   : books.map((book, index) => (
  //       <BookCard book={book} key={index} />
  //     ));

      

  return (
    <div className="BookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>
          <div className="col-md-11">
            <Link to="/add" className="btn btn-info float-right">
              + Add New Book!
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div className="list">{bookList}</div>
      </div>
    </div>
  );
}

export default BookList;
