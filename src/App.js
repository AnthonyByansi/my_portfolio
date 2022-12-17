// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard 
          image={require('./images/project1.jpg')}
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard 
          image={require('./images/project2.jpg')}
          title="Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard 
          image={require('./images/project3.jpg')}
          title="Project 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}

export default App;
