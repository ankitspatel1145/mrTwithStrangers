import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <ul className="nav-list">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li className="signup">
        <Link to="/signup">Sign up!</Link>
      </li>
    </ul>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">

      <li >
        <Link onClick={logout}>Log Out</Link>
      </li>
      <li className="name-display">

        <h2 className="header-name">Hi, {currentUser.firstName}!</h2>
      </li>
    </hgroup>
  );
  
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
