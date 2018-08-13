import React from 'react';
import './contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
       <div className='contact'>
        <h1>Ryan Groesch</h1>
        <ul>
          <li>Link to my <a href='http://github.com/ryan-g13'>Github</a></li>
          <li>Link to my <a href='https://www.linkedin.com/in/ryan-groesch/'>LinkedIn </a></li>
          <li>Email?</li>
          <li>Phone?</li>
        </ul>
       </div>
    );
  }
}
