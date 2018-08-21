import React from 'react';
// import { Link } from 'react-router-dom'; 
// import ROUTES from '../../routes';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    // link footer to contact info???
    return (
      <footer>
        {/* <Link to={ROUTES.CONTACT}><h3 className='footer-content'>&copy; Ryan Groesch - 2018</h3></Link> */}
        <a href='/contact' data-nav='contacts' ><h3 className='footer-content'>&copy; Ryan Groesch - 2018</h3></a>
      </footer>
    );
  }
}
