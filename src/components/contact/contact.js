import React from 'react';
import './contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
       <div className='contact'>
        <h2>Ryan Groesch</h2>
        <ul>
          <li>Link to my <a href='http://github.com/ryan-g13' target="_blank" rel="noopener noreferrer">Github</a></li>
          <li>Link to my <a href='https://www.linkedin.com/in/ryan-groesch/' target="_blank" rel="noopener noreferrer">LinkedIn </a></li>
          <li>Email?</li>
          <li>Phone?</li>
        </ul>
        <img src="http://via.placeholder.com/350x150" alt="Ryan Groesch's image" />
       </div>
    );
  }
}
