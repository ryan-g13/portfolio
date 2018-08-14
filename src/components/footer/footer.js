import React from 'react';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    // link footer to contact info???
    return (
      <footer>
        <a href='/contact' data-nav='contacts' ><h3 className='footer-content'>&copy; Ryan Groesch - 2018</h3></a>
      </footer>
    );
  }
}
