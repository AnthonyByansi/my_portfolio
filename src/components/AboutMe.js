

// src/components/AboutMe.js
import React from 'react';

const AboutMe = (props) => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>{props.aboutMe}</p>
    </div>
  );
};

export default AboutMe;
