'use strict';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//___________________________________________________________
// Static Components
//___________________________________________________________
import Footer from '../footer/footer';
import Header from '../header/header';

//___________________________________________________________
// Imported Components
//___________________________________________________________


export default class App extends React.Component() {
  // stuff here 
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Footer/>
      </BrowserRouter>
    );
  }
};