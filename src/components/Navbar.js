import React from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#hamburger" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img alt="Logo" src={logo}/>
            <span>Kitches</span>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="hamburger">
          <ul className="nav navbar-nav">
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="about">About</a></li>
            <li><a href="cart">Contact Us</a></li>
            <li><a href="admin">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );    
}

export default Navbar;