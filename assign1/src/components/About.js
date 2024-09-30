import React from 'react';
import profile from '../assets/profile.jpg';
const AboutMe = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <img src={profile} alt="Rithika Rajkumar" />
      <p>
        Hi, I'm Rithika Rajkumar, a passionate software engineer focused on web and mobile development.
        I am currently pursuing my diploma at the School of Engineering Technology and Applied Science.
      </p>
      <p>
        Skills: JavaScript, React, Node.js, CSS, HTML.
      </p>
      <a href="\resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="button">Download My Resume</button>
      </a>
    </div>
  );
};

export default AboutMe;
