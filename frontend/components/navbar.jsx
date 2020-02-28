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
              <Link className="navlinks" to='/events'>Events</Link>
            </li>
            <li>
              <Link className="navlinks" to='/events/new'>Hosting</Link>
            </li>
            <li>
              <Link className="navlinks" to='/about'>About</Link>
            </li>
              <GreetingContainer />
          </ul>
        </nav>
     
      </div>
    );
  }
}

export default NavBar;