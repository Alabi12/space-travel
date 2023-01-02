import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';

const NavBar = () => (
  <nav className="navBar">
    <a href="/home">
      <img src={logo} className="App-logo" alt="logo" />
    </a>
    <h1>Space Travelers Hub</h1>
    <ul className="navMenu">
      <li>
        <NavLink
          to="/rockets"
          className="navItem"
          activeclassname="selected"
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions" className="navItem" activeclassname="selected">
          Missions
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
