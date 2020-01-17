import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";

class FooterEle extends React.Component{

  render() {
    return(
      <div className="footer">
        <nav className="footer-nav-list">
          <ul className="footer-link-list-ul">
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/hosting'>Hosting</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ankit-patel-aa5216133/" target="_blank"> LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/ankitspatel1145/" target="_blank">GitHub</a>
            </li>
          </ul>
        </nav>
        <div className="footer-text">
          <p>This project is obviously a joke, and in no way affiliated with the real Mr. T</p>
          <p>If you like what you see, or apriciate my sense of humor, check out my github and LinkedIn profiles on the left over there.</p>
          <p>Or click the logos on the right. You do you.</p>
        </div>
        <div className='linkimg'>
          <a href="https://github.com/ankitspatel1145/" target="_blank">
            <img src={window.git} width="100%" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-patel-aa5216133/" target="_blank"> 
            <img src={window.link} width="100%" />
          </a>
        </div>

      </div>
    )
  }
}


export default FooterEle;