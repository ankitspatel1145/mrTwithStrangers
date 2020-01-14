import React, { Component } from "react";
import { Link } from "react-router-dom";

const Splash = () => {
return (
<div className="splash-body">

  <div className="sec1">
    <h1>Don't be a fool</h1>
    <p>Come hang out with a Mr. T today</p>
    <div>
      <Link  to="/login"> Come Hang Out!</Link>
    </div>
  </div>

  <div className="sec2">
    <div className='sec2-inner'>
      <div className='sec2-blurb'>
        <h1>Just show up</h1>
        <p>There will be others there</p>
      </div>
      <div className='sec2-blurb'>
          <h1>Do cool stuff with a Mr. T</h1>
          <p>You can never have too many Mr. T</p>
      </div>
      <div className='sec2-blurb'>
          <h1>No fools here</h1>
          <p>Becuase Mr. T destroyed them</p>
      </div>
    </div>
  </div>
  <div className="sec3">

  </div>
  <div className="sec4">

  </div>
</div>
)
}

export default Splash;