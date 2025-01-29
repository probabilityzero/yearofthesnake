import React from 'react';
import { Link } from 'react-router-dom';

function ProjectBox({ project }) {
  const viewProjectLink = project.isGame ? `/project/${project.name}` : project.link;
  const arrowSymbol = ' ↗';

  return (
    <div className="project-box">
      <div className="project-details">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>Date: {project.date}</p>
        <Link to={viewProjectLink}>
          View Project{arrowSymbol}
        </Link>
      </div>
      <img src={project.photo} alt={project.name} />
    </div>
  );
}

export default ProjectBox;
