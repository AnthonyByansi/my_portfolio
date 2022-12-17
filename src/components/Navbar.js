// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
  );
};

export default Navbar;
