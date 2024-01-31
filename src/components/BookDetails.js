import React from 'react';


const BookDetails = ({ bookId, onPageChange }) => {
  const [BookDetails] = React.useState({
    title : 'theGreat Gatsby',
    description : 'A novel by F. Scott Fitzgerald',
    author : 'F. Scott Fitzgerald',
    price : '$12.99',
  });

  
  
    return ( <div className="container mt-4">
    <h2> {BookDetails.title}</h2>
    <p> Description : {BookDetails.description}</p>
    <p> Author : {BookDetails.author}</p>
    <p> Price: {BookDetails.price}</p>
  <button onClick={()=> onPageChange('ebooks')}>Go to Ebooks</button>

  </div>
  );
};

export default BookDetails;