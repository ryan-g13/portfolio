'use strict';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../../routes';
import './app.scss';

// ___________________________________________________________
// Static Components
// ___________________________________________________________
import Footer from '../footer/footer';
import Header from '../header/header';
import Landing from '../landing/landing';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import Resume from '../resume/resume';
import UrlRedirect from '../urlRedirect/urlRedirect';

// ___________________________________________________________
// Imported Components
// ___________________________________________________________


export default class App extends React.Component { 
  render() {
    return (
      <div className='app' >
        <BrowserRouter>
          <div className='main'>
          <Header />
          <Route path='*' component={UrlRedirect} />
          <Route exact path={Routes.LANDING} component={Landing}/>
          <Route exact path={Routes.CONTACT} component={Contact} />
          <Route exact path={Routes.PROJECTS} component={Projects} />
          <Route exact path={Routes.RESUME} component={Resume} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
