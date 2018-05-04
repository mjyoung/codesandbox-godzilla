import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Sandbox from './components/Sandbox';

import './resets.scss';
import './styles.scss';

const BasicExample = () => (
  <Router>
    <div className="app">
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/sandbox" component={Sandbox} />
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById('root'));
