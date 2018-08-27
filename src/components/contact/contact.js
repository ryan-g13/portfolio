import React from 'react';
// import { IndexLink } from 'react-router-dom';
import profilePicture from '../../assets/Profile.jpg';
import motorcycle from '../../assets/motorcycle.jpg';
import flower from '../../assets/flower.jpg';
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
        <img className='profileImage' src={motorcycle} alt="Motorcycle image" />
        <img className='profileImage' src={profilePicture} alt="Ryan Groesch's image" />
        <img className='profileImage' id='flower' src={flower} alt="Flower image" />
        <p>I have a background in technology, I started at T-Mobile as a tier 3 tech support and have been with Google Maps, and Amazon in varying roles. While at Amazon I discovered HTML, CSS and writing SQL queries to derive metrics and identify HVTs, this experience has helped shape me into the programmer I am today.</p>
       </div>
    );
  }
}
