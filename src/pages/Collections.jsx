import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import './Collections.css';

function Collections() {
  return (
    <div className="collections-container">
      <h1 className="chinese-title">
        <span className="chinese-char">蛇</span>
        <span className="english-title">Year of the Snake</span>
      </h1>
      <h2 className="section-title">Project Collections</h2>
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
