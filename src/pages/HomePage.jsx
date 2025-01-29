import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBox from '../components/ProjectBox';
import projectsData from '../data/projects.json';

function HomePage() {
  const featuredProjects = projectsData.slice(0, 6);
  const recentProjects = projectsData.slice(0, 3);

  return (
    <div className="container">
      <h1>Year of Snake</h1>
      <div className="recent-projects">
        <h2>Recent Projects</h2>
        <ul>
          {recentProjects.map((project) => (
            <li key={project.name}>
              <Link to={`/project/${project.name}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
        <Link to="/collections" className="view-collection-link">
          View the collection →
        </Link>
      </div>
      <h2>Featured Projects</h2>
      {featuredProjects.map((project) => (
        <ProjectBox key={project.name} project={project} />
      ))}
    </div>
  );
}

export default HomePage;
