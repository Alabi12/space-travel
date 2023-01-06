import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';

const NavBar = () => (
  <nav className="navBar">
    <a href="/">
      <img src={logo} className="App-logo" alt="logo" />
    </a>
    <h1>Space Travelers` Hub</h1>
    <ul className="navMenu">
      <li>
        <NavLink
          to="/rockets"
          className="navItem"
          activeclassname="active"
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions" className="navItem" activeclassname="active">
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink to="/myprofile" className="navItem navItemMyProfile" activeclassname="active">
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
