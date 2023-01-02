import React from 'react';
import { Link } from 'react-router-dom';
import logo from './planet.png';

const NavLink = () => (
  <nav className="navLink">
    <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
    <h1>Space Travelers Hub</h1>
    <ul className="navMenu">
      <li><Link to="/rockets" className="navItem">Rockets</Link></li>
      <li><Link to="/missions" className="navItem">Missions</Link></li>
    </ul>
  </nav>
);

export default NavLink;
