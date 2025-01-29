import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

function Collections() {
  return (
    <div>
      <h1>Project Collections</h1>
      {projectsData.map((project) => (
        <div key={project.name} className="project-box">
          <div className="project-details">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Date: {project.date}</p>
             <Link to={`/project/${project.name}`} className="project-link">View Project</Link>
          </div>
          <img src={project.image} alt={project.name} />
        </div>
      ))}
    </div>
  );
}

export default Collections;
