import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBookForm';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<BookList/>} />
        <Route path="/add" element={<AddBook/>} />
      </Routes>
    </Router>
  );
}

export default App;
