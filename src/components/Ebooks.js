import React, { useState } from 'react';

const Ebooks = () => {
  const [books, setBooks] = useState([
    { id: '1', title: 'Book 1', description: 'Description for Book 1.', author: 'Author 1', price: '$10' },
    { id: '2', title: 'Book 2', description: 'Description for Book 2.', author: 'Author 2', price: '$15' },
    // Add more 
  ]);

  return (
    <div className="container mt-4">
      <h2>Ebooks</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>

            <p>Description: {book.description}</p>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            
            <button onclick = {() => onBookSelect ('book-details', book.id )} > view Details </button>  
          </li>
        ))}
      </ul>
      <button onClick = {() => onPageChange('home') }>Go Home</button>
      <button onclick = {()=> onPageChange('add-book')}></button>
    </div>
  );
};

export default Ebooks;