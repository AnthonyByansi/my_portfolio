// src/components/Footer.js
import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      <p>Copyright {new Date().getFullYear()}</p>
      <a href={props.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
};

export default Footer;
