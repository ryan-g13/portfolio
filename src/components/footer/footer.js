import React from 'react';
// import { Link } from 'react-router-dom'; 
// import ROUTES from '../../routes';
// import linkedInLogo from '../../assets/linkedInLogo.jpg';
// import gitHubLogo from '../../assets/gitHubLogo.jpg';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    // link footer to contact info???
    return (
      <footer>
        <div className='footer-content'>
          {/* <Link to={ROUTES.CONTACT}><h3 className='footer-content'>&copy; Ryan Groesch - 2018</h3></Link> */}
          <a href='/contact' data-nav='contacts' ><h3 className='footer-text'>&copy; Ryan Groesch - 2018</h3></a>
          <ul> 
            <li>
              <a href='http://github.com/ryan-g13' target="_blank" rel="noopener noreferrer"><img src="http://via.placeholder.com/30x30" alt="Github Logo" /></a>
            </li>
            <li>
          <a href='https://www.linkedin.com/in/ryan-groesch/' target="_blank" rel="noopener noreferrer"><img src="http://via.placeholder.com/30x30" alt="LinkedIn Logo" /></a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
