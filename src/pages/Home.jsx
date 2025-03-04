import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import './Home.css';

function Home() {
  const featuredProjects = projectsData.filter(project => project.featured);
  const recentProjects = projectsData.slice(0, 3);

  return (
    <div className="home-container">
      <div className="section-header">
        <h2 className="section-title">Recent Projects
          <div className="view-collection-link">
            <Link to="/collections">See All Collections</Link>
          </div>
        </h2>
      </div>
      <div className="recent-projects-container">
        <ul className="recent-projects-list">
          {recentProjects.map((project) => (
            <li key={project.name} className="recent-project-item">
              <div className="recent-project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Link to={`/project/${project.name}`} className="project-link">View Project</Link>
              </div>
              <img src={project.image} alt={project.name} /> 
            </li>
          ))}
        </ul>
      </div>
      <h2 className="section-title">Featured Projects</h2>
      {featuredProjects.map((project) => (
        <div key={project.name} className="featured-projects">
          <div className="project-details">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={`/project/${project.name}`} className="project-link">View Project</Link>
          </div>
          <img src={project.image} alt={project.name} />
        </div>
      ))}
      <h3>
      <div className="see-all-collections">
        <Link to="/collections" className="view-collection-link">See All Collections &rarr;</Link>
      </div></h3>
    </div>
  );
}

export default Home;
