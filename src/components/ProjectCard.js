// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      
    </div>
  );
};

export default ProjectCard;
