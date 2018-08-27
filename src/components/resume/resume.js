import React from 'react';
import { Document, Page } from 'react-pdf';
import './resume.scss';
import resume from '../../assets/Ryan Groesch - August2018.pdf';

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
        <h1>This is a placeholder for my resume pdf clickable/downloadable.</h1>
        <button className='download-button'> Download</button> 
        <div className="resume-pdf">
          <Document 
            file={resume}
            onLoadSuccess={this.onDocumentLoad} className="resume"
            width='720'> 
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
          <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}
