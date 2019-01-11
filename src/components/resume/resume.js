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

  handleNext = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  }

  handlePrevious = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
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
        <div className="button-box">
          <button className="small-button" onClick={this.handlePrevious}> Previous Page </button>
          <p id="pageText">Page {pageNumber} of {numPages}</p>
          <button className="small-button" onClick={this.handleNext}>Next Page</button>
        </div>
      </div>
    );
  }
}
