'use strict';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//___________________________________________________________
// Static Components
//___________________________________________________________
import Footer from '../footer/footer';
import Header from '../header/header';
import Landing from '../landing/landing';
import Projects from '../projects/projects';
import Contact from '../contact/contact';

//___________________________________________________________
// Imported Components
//___________________________________________________________


export default class App extends React.Component() { 
  render() {
    return (
      <div className='app' >
        <Header />
        <BrowserRouter>
        <div className='main'>
          <Route path='*' component={Landing} />
          <Route exact path='/' component={Landing}/>
          <Route exact path='/contact' component={contact} />
          <Route exact path='/projects' component={Projects} />
        </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
};