import React from 'react';
import './resume.scss';

export default class Resume extends React.Component {
  render() {
    return (
      <div className='resume' >
        <h1>This is a placeholder for my resume pdf clickable/downloadable.</h1>
        <button className='download-button'> Download</button> 
        {/* <embed src="../../assets/Ryan Groesch - August2018.pdf" type="application/pdf"   height="300px" width="100%"></embed> */}
        <img src='http://via.placeholder.com/480x640' alt='Resume PDF' /> 
      </div>
    );
  }
}
