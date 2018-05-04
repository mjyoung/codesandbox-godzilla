import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

import './Home.scss';

const Home = () => (
  <div className="home">
    <Sidebar />
    <MainContent />
  </div>
);

export default Home;
