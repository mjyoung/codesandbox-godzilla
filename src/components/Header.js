import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <div className="header">
    <ul className="header__list">
      <li className="header__list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="header__list-item">
        <Link to="/sandbox">Sandbox</Link>
      </li>
    </ul>
  </div>
);

export default Header;
