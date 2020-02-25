import React from 'react'
import EventIndexItem from './events_index_item';
// import { HashLink, Link } from 'react-router-hash-link';

class EventsIndex extends React.Component{

  constructor(props) {
    super(props)
    this.state = {}
    // this.testq = this.testq.bind(this)
  }

  componentDidMount(){
    this.props.getAllEvents();
  }

  // testq(){
  //   console.log("test")
  // }

  render() {
    let test = document.getElementById('cit')
    let now = new Date()    
    console.log(now)
    let events = this.props.events
    let la = events.filter(event => {
      let eventDate = new Date(event.date)
      if ((event.city === "Los Angeles") && (eventDate > now)){
        return event
      }
    }) 
    let ny = events.filter(event => {
      let eventDate = new Date(event.date)
      if ((event.city === "New York") && (eventDate > now)) {
        return event
      }
    }) 
    let sf = events.filter(event => {
      let eventDate = new Date(event.date)
      if ((event.city === "San Francisco") && (eventDate > now)) {
        return event
      }
    }) 
    // debugger
    return(
      
      <div className='eventsindex'>

        <div className='citybtn'>
          {/* <input type="button" onClick="document.getElementById('test').scrollIntoView();" /> */}
          {/* <button onclick=" document.getElementById(`test`).scrollIntoView();">Scroll</button> */}
          <button onClick={() => (test.scrollIntoView())} >test</button>

        </div>

        <div className='city'>
          <div className='cityname'>
            <h1>Events in San Francisco:</h1>
          </div>
          <div>
            <ul className="eventslist">
              {sf.map(event => 
                <EventIndexItem 
                  key={event.id} 
                  event={event} 
                  // deleteEvent={deleteEvent} 
                  />)
                }
                </ul>
          </div>
        </div>
        <div className='city'>
          <div className='cityname'>
            <h1>Events in Los Angeles:</h1>
          </div>
          <div>
            <ul className="eventslist">
              {la.map(event => 
                <EventIndexItem 
                  key={event.id} 
                  event={event} 
                  // deleteEvent={deleteEvent} 
                  />)
                }
                </ul>
          </div>
        </div>
        <div id="cit" className='city'>
          <div className='cityname'>
            <h1>Events in New York:</h1>
          </div>
          <div>
            <ul className="eventslist">
              {ny.map(event => 
                <EventIndexItem 
                  key={event.id} 
                  event={event} 
                  // deleteEvent={deleteEvent} 
                  />)
                }
                </ul>
          </div>
        </div>
          <div id="test">
          <h1 >hw</h1>
          </div>
      </div>
    );
  }
}

export default EventsIndex;