import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  console.log(localStorage.userId);
  console.log(localStorage.token, 'token inner');
  return (
    <div className="home-section">
      <Navbar />
      <div className="main-inner-home-section bg-info">
        <div className="home-main-photo-section">
          <p>Home section</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
