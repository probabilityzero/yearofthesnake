import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

function ProjectPage() {
  const { projectName } = useParams();
  const project = projectsData.find((p) => p.name === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <h2>{project.name}</h2>
      <img src={project.photo} alt={project.name} />
      <p>{project.description}</p>
      <p>Date: {project.date}</p>
      {project.isGame ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Play Game ↗
        </a>
      ) : (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project ↗
        </a>
      )}
    </div>
  );
}

export default ProjectPage;
