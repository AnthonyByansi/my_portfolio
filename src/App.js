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
      <AboutMe 
        aboutMe={<p>As a UX and UI designer, I'm passionate about creating intuitive and user-friendly designs that enhance the user experience. my career goal is to improve the way people interact with technology by designing easy-to-use interfaces. I'm constantly exploring new design techniques and staying up-to-date with the latest design trends. I am responsible for designing the user experience and user interface of digital products, such as websites and mobile apps. I create wireframes, prototypes, and high-fidelity designs, as well as conduct user research and testing to ensure that the product is intuitive, user-friendly, and visually appealing. My goal as a UX/UI designer is to create designs that meet the needs of users and improve their overall experience with the product. I believe that great design has the power to drive user engagement, conversion, and satisfaction, and I am committed to helping businesses and organizations achieve their goals through thoughtful and effective design. If you have a project that you think would benefit from my UX/UI design skills, please don't hesitate to get in touch. I would love to discuss your goals and ideas, and help you bring your vision to life. Thank you for considering me for your design needs.</p>}
      />
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard 
          image={require('./images/L.png')}
          title="Login and SignUp "
          description="A login and signup page is a crucial part of any website or application, as it allows users to create an account and access the site's features and content"
        />
        <ProjectCard 
          image={require('./images/frame1.jpg')}
          title="Addax Enterprise"
          description="Ugandan based Website design for service delivery"
        />
        <ProjectCard 
          image={require('./images/christmas.png')}
          title="Christmas Times"
          description="A simple christmas flyer design"
        />
      </div>
    </div>
  );
}

export default App;
