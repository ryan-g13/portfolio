import React from 'react';
// import { Link } from 'react-router-dom';

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className='nav-bar'>
        <div className='logo-container'>
          <a href='/' data-nav='home'><img src='http://via.placeholder.com/300x100' alt='R G Logo'/></a>
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
            <li>
              <a href="/resume" data-nav="resume">RESUME</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
