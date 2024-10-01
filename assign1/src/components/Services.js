import React from 'react';
import webDevelopment from '../assets/webdevelpment.jpeg'; 
import mobile from '../assets/moble.jpeg';
import programming from '../assets/programming.jpeg';

const Services = () => {
  return (
    <div className="services-container">
      <h2><b>Services</b></h2>
      <ul>
        <li>
          <img src={webDevelopment} alt="Web Development"/>
          <span>Web Development</span>
        </li>
        <li>
          <img src={mobile} alt="Mobile Application Development" />
          <span>Mobile Application Development</span>
        </li>
        <li>
          <img src={programming } alt="Software Solutions" />
          <span>Software Solutions</span>
        </li>
      </ul>
    </div>
  );
};

export default Services;
