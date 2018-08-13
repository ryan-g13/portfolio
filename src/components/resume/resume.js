import React from 'react';
import './resume.scss';

export default class Resume extends React.Component {
  render() {
    return (
      <div className='resume' >
        <h1>This is a placeholder for my resume pdf clickable/downloadable.</h1>
        <button text='download'/> 
        <img src='' alt='Resume PDF' /> 
      </div>
    );
  }
}
