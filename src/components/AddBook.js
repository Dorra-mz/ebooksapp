import React from "react";


const AddBook = ({onPageChange}) => {
    return ( 
        <div className="container mt-4">
            <h2>Add a book</h2> 
            <button onclick = {() => onPageChange('ebooks')}>Go to Ebooks</button>
        </div>
    )
};
export default AddBook;