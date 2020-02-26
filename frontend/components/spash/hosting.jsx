import React, { Component } from "react";
import { Link } from "react-router-dom"

const hosting = () =>(
  
  <div className='hosting'>
    <h1>So you want to host an event?</h1>
    <p>Well too bad, becuase you are not Mr. T</p>
    <p>Only the real Mr. T can host a Mr.T event, you fool</p>
    <p>(Log in as demo user to make an event)</p>
    <img src={window.hosting} />
  </div>
)

export default hosting