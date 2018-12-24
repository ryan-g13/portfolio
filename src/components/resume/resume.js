import React from 'react';
import { Document, Page } from 'react-pdf';
import './resume.scss';
import resume from '../../assets/Ryan Groesch - Resume_SDE.pdf';

export default class Resume extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className='resume' >
        <h1>View my work and education history below.</h1>
        <button className='download-button'><a href={resume} download="Ryan_Groesch_Resume">Download</a></button> 
        <div className="resume-pdf">
          <Document 
            file={resume}
            onLoadSuccess={this.onDocumentLoad} className="viewable-resume"
            width='720'> 
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
          <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}
