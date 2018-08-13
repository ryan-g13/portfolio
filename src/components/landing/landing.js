import React from 'react';
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
    <div className='landing'>
      <div className='heroText'>
        <h1>Ryan Groesch</h1>
        <p>Full-Stack Javascript Software Developer(MERN)</p>
        <p><a href="/contact" data-nav="contact">Hire Me</a></p>
      </div>
    </div>
    );
  }
}
