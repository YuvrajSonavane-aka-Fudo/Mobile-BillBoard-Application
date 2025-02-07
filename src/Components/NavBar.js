import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <nav className="navBar">
    <div className="navLeft">Home</div>
    <div className="navRight">
      <span>Analytics Dashboard</span>
      <span>Support</span>
    </div>
  </nav>
);

export default NavBar;