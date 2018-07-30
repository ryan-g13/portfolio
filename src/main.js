'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';

import './styles/main.scss';

const app = document.createElement('div');
document.body.appendChild(app);
render(<App/>, app);
