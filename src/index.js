/* eslint-disable no-console */
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

import './styles/styles.css'; //webpack can import css files into bundle
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render (
  <Router history={browserHistory} routes={routes} />, document.getElementById('app')
);
