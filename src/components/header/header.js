import React from 'react';
// import { Link } from 'react-router-dom';

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className='nav-bar'>
        <div className='logo-container'>
          <img />
          <h1>Ryan Groesch</h1>
          <h3>Full-Stack JavaScript Developer(MERN)</h3>
        </div>
        <div className='nav-links'>
          <ul>
            <li>
              <a href="/" className="hilighted" data-nav="home">HOME</a>
            </li>
            <li>
              <a href="/projects" data-nav="projects">PROJECTS</a>
            </li>
            <li>
              <a href="/contact" data-nav="contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
