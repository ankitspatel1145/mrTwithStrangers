import React, { Component } from "react";
import {Link} from "react-router-dom"
import GreetingContainer from './greeting/greeting_container';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className="nav-image">
          <Link to="/" >
            <img src={window.logoURL} width="100%" />
          </Link>
        </div>
        
        <nav className="nav-list">
          <ul className="link-list-ul">
            <li>
              Events
            </li>
            <li>
              Hosting
            </li>
            <li>
              About
            </li>
            <li>
              <GreetingContainer />
            </li>
          </ul>
        </nav>
     
      </div>
 );
  }
}

export default NavBar;