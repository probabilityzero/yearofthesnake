import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import './Project.css';

function Project() {
  const { projectName } = useParams();
  const project = projectsData.find((proj) => proj.name === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <div className="project-content">
        <div className="project-details">
          <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} className="project-image" />
          <p>{project.description}</p>
          <p>Date: {project.date}</p>
          <p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </p>
          {project.otherInfo && (
            <div>
              <h2>Other Information</h2>
              <p>{project.otherInfo}</p>
            </div>
          )}
          <Link to="/" className="back-home-link">
            &larr; Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
