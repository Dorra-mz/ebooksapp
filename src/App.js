import React, {useState} from 'react';
import Home from './components/Home';
import Ebooks from './components/Ebooks';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';
import { BrowserRouter as Route, Router, } from 'react-router-dom';
const App = () => {

    const [currentPage , setCurrentPage]= useState ('home');
    const [selecetedBookId , setSelectedBookId]= useState (null);
    

    const handlePageChange = (page,bookId = null) => {
      setCurrentPage (page);
      setSelectedBookId (bookId);
    };
    return (  
      <Router>
      <div className='App'>
       
        <Route path="/"  render={(props) => <Home {...props} onPageChange={handlePageChange} />} />
                    <Route path="/ebooks" render={(props) => <Ebooks {...props} onPageChange={handlePageChange} onBookSelect={handlePageChange} />} />
                    <Route path="/add-book" render={(props) => <AddBook {...props} onPageChange={handlePageChange} />} />
                    <Route path="/book-details" render={(props) => <BookDetails {...props} bookId={selecetedBookId} onPageChange={handlePageChange} />} />        
              
</div>

</Router>
  );
};

export default App;