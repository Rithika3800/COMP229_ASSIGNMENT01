import React from 'react';
import story from '../assets/generator.jpeg'; 
import wordgame from '../assets/wordgame.jpeg';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2><b>My Projects</b></h2>
      
      <h4>Project 1: Word Game</h4>
      <a href="/project1/index.html" target="_blank" rel="noopener noreferrer">
        <img src={wordgame} alt="Word Game" />
      </a>

      <h4>Project 2: Generate Story</h4>
      <a href="/project2/index.html" target="_blank" rel="noopener noreferrer">
        <img src={story} alt="Generate Story" />
      </a>
    </div>
  );
};

export default Projects;
