import React from 'react';
import './projects.scss';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects' >
        <div className='row' >
          <div className='leftItem' >
            <img src='imageLinkHere' alt='ImageDescription'/>
            <p><span>Title Field here </span>Long Description of project</p>
          </div>
          <div className='rightItem' >
            <img src='imageLinkHere' alt='ImageDescription'/>
            <p>Long Description of project # 2 </p>
          </div>
        </div>
      </div>
    );
  }
}
