import React, { Component } from "react";
import {Link} from "react-router-dom"
import GreetingContainer from './greeting/greeting_container';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="header-link">
          <img src="" alt=""/>
        </Link>
        <ul>
          <li>
            Events
          </li>
          <li>
            Hosting
          </li>
          <li>
            About
          </li>
        </ul>
        <GreetingContainer />

      </React.Fragment>
    );
  }
}

export default NavBar;