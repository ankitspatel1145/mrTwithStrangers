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
    <div className="why">
      <h3>SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</h3>
      <div className="rep">
          <img src={window.mr1} alt=""/>
          <div className="inner4">
            <h1>
              It's weird.
            </h1>
            <p>Everyone at Mr. T time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.</p>
          </div>
      </div>
      <div className="rep">
          <div className="inner4">
            <h1>
              We won't meet otherwise.
            </h1>
            <p>When else will you get a chance to hang out with Mr T? Admit it, you won't. This is a once in a life time opportunity</p>
          </div>
          <img src={window.mr3} alt=""/>
      </div>
      <div className="rep">
          <img src={window.mr2} alt=""/>
          <div className="inner4">
            <h1>
              Or else....
            </h1>
            <p>Becuase if you don't, Mr.T will come find you. And pity you..</p>
          </div>
      </div>
    </div>
  </div>
  <div className="sec5">

  </div>
</div>
)
}

export default Splash;