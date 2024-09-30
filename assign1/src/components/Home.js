import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>My mission is to leverage technology to solve problems and improve lives.</p>
      <Link to="/About" className="button">Learn More About Me</Link>
    </div>
  );
};

export default Home;