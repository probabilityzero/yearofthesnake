import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import './Home.css';

function Home() {
  const featuredProjects = projectsData.filter(project => project.featured);
  const recentProjects = projectsData.slice(0, 3);

  return (
    <div className="home-container">
      <h1 className="chinese-title">
        <span className="chinese-char">蛇</span>
        <span className="english-title">Year of the Snake</span>
      </h1>
      <div className="section-header">
        <h2 className="section-title">Recent Projects
          <div className="view-collection-link">
            <Link to="/collections">View the collection →</Link>
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
                <p>Date: {project.date}</p>
                <Link to={`/project/${project.name}`} className="project-link">View Project</Link>
              </div>
              <img src={project.image} alt={project.name} />
            </li>
          ))}
        </ul>
      </div>
      <h2 className="section-title">Featured Projects</h2>
      {featuredProjects.map((project) => (
        <div key={project.name} className="project-box">
          <div className="project-details">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={`/project/${project.name}`} className="project-link">View Project</Link>
          </div>
          <img src={project.image} alt={project.name} />
        </div>
      ))}
      <div className="about-challenge">
        <h2 className="section-title">About the Challenge</h2>
        <p>
          This is a personal challenge to create a variety of projects during the year of the snake.
          The goal is to explore different technologies and improve my skills.
        </p>
      </div>
      <footer className="contact-me">
        <p>Contact Me: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
      </footer>
    </div>
  );
}

export default Home;
