import React from 'react';
import './contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
       <div className='contact'>
        <h1>Ryan Groesch</h1>
        <ul>
          <li>GitHub link: </li>
          <li>LinkedIn link: </li>
          <li>Email?</li>
          <li>Phone?</li>
        </ul>
       </div>
    );
  }
}
