import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

function Project() {
  const { projectName } = useParams();
  const project = projectsData.find((proj) => proj.name === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Date: {project.date}</p>
      <p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </p>
      <img src={project.image} alt={project.name} style={{ maxWidth: '300px' }}/>
      {project.otherInfo && (
        <div>
          <h2>Other Information</h2>
          <p>{project.otherInfo}</p>
        </div>
      )}
    </div>
  );
}

export default Project;
