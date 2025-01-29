import React from 'react';
    import { Link } from 'react-router-dom';
    import projectsData from '../data/projects.json';

    function Home() {
      const featuredProjects = projectsData.slice(0, 6);
      const recentProjects = projectsData.slice(0, 3);

      return (
        <div>
          <h1>Year of the Snake</h1>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2>Recent Projects</h2>
            <div className="view-collection-link">
              <Link to="/collections">View the collection →</Link>
            </div>
          </div>
            <ul>
              {recentProjects.map((project) => (
                <li key={project.name}>
                  <Link to={`/project/${project.name}`} className="project-link">{project.name}</Link>
                </li>
              ))}
            </ul>
          <h2>Featured Projects</h2>
          {featuredProjects.map((project) => (
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

    export default Home;
