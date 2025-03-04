import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import '../index.css';

function Collections() {
  return (
    <div className="collections-container">
      <h2 className="section-title">Project Collections</h2>
      {projectsData.map((project) => (
        <div key={project.name} className="project-box">
          <div className="project-details">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Date: {project.date}</p>
             <Link to={`/project/${project.name}`} className="project-detail-link">View Project</Link>
          </div>
          <img src={project.image} alt={project.name} />
        </div>
      ))}
      <Link to="/" className="back-home-link">
        Go Back to Home
      </Link>
    </div>
  );
}

export default Collections;
