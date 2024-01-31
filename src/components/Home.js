import React from 'react';

const Home = () => {
  return (
    <div className="container mt-4">
      <h2>Home</h2>
      <p>Welcome to the Books App! Explore our collection of ebooks.</p>
      <button onclick= {()=> onPageChange('ebooks')}>Go to Ebooks</button>
    </div>
  );
};

export default Home;