import React, { Component } from "react";
import {Link} from "react-router-dom"
import GreetingContainer from './greeting/greeting_container';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="logo-div">
          <Link to="/" className="header-link">
            <img src="/assets/logo.png" width="100%" />
          </Link>
        </div>
        <div className="nav-links">

        <ul className="link-list">
          <li>
            Events
          </li>
          <li>
            Hosting
          </li>
          <li>
            About
          </li>
        <GreetingContainer />
        </ul>
        </div>

      </nav>
 
 );
  }
}

export default NavBar;