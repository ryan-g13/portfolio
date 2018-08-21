import React from 'react';
// import { IndexLink } from 'react-router-dom';
import './contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
       <div className='contact'>
        <h2>Visit my profile and see my work.</h2>
        <ul>
          <li><img src="http://via.placeholder.com/30x30" alt="Github Logo" />Look through my <a href='http://github.com/ryan-g13' target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><img src="http://via.placeholder.com/30x30" alt="LinkedIn Logo" />Visit my <a href='https://www.linkedin.com/in/ryan-groesch/' target="_blank" rel="noopener noreferrer">LinkedIn </a></li>
        </ul>
        <p>I am a left-handed, motorcycle riding Javascript developer.</p>
        <img className='profileImage' src="http://via.placeholder.com/350x150" alt="Ryan Groesch's image" />
        <img className='profileImage' src="http://via.placeholder.com/350x150" alt="Motorcycle image" />
       </div>
    );
  }
}
