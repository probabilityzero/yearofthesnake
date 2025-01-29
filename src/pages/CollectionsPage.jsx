import React from 'react';
import ProjectBox from '../components/ProjectBox';
import projectsData from '../data/projects.json';

function CollectionsPage() {
  return (
    <div className="container">
      <h1>Project Collections</h1>
      {projectsData.map((project) => (
        <ProjectBox key={project.name} project={project} />
      ))}
    </div>
  );
}

export default CollectionsPage;
