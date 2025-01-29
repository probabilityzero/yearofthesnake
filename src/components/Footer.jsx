import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About the Challenge</h4>
          <p>
            This is a personal challenge to create a variety of projects during the year of the snake.
            The goal is to explore different technologies and improve my skills.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
          </p>
          <p>
            <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer" className="contact-link">Telegram</a>
          </p>
          <p>
            <a href="mailto:your-email@example.com" className="contact-link">Email</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <p><Link to="/collections" className="contact-link">Project Collections</Link></p>
        </div>
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} Year of the Snake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
