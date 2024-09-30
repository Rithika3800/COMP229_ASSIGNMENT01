import React from 'react';
import profile from '../assets/profile.jpg';

const AboutMe = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello, I'm <span>Rithika Raj Kumar</span>, a passionate software engineer focused on web and mobile development. I am currently pursuing my diploma at centennial college Toronto,ON.
          </p>
          <p>
            My journey in software engineering began with a strong interest in solving real-world problems using technology. Over time, I have honed my skills in programming languages like <span>JavaScript, React, Node.js, CSS, and HTML</span>, allowing me to build efficient, scalable applications.
          </p>
          <p>
            I am particularly passionate about web development and enjoy working on projects that have a positive impact on users' lives. </p>
          <p className="quote">"Turning complex problems into simple, elegant solutions."</p>
        </div>
        <img src={profile} alt="Rithika Rajkumar" />
      </div>

      <div className="resume-section">
        <a href="\resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="button">Download My Resume</button>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
