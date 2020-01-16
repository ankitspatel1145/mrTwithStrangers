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
            
          </ul>
        </nav>
        <div className="footer-text">
          <p>this is a ptakjahfd asjfasljfd;a lshdf; ljasl;dfja;sdjfl; ajs;ldfjkfh a;shf
            akdfh;a sd'fljal sdjfg
          </p>
        </div>

      </div>
    )
  }
}


export default FooterEle;