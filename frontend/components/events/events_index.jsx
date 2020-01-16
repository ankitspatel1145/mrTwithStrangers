import React from 'react'
import EventIndexItem from './events_index_item';
// import { HashLink, Link } from 'react-router-hash-link';

class EventsIndex extends React.Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.props.getAllEvents();

  }

  render() {
    let events = this.props.events
    // debugger
    let la = events.filter(event => event.city === "Los Angeles")
    let ny = events.filter(event => event.city === "New York")
    let sf = events.filter(event => event.city === "San Francisco")
    return(
      
      <div>

        <div className='sfevents'>
          <h1>Events in San Francisco</h1>
          <ul>
            {sf.map(event => <EventIndexItem key={event.id} event={event} />)}

          </ul>
        </div>
        <div className='laevents'>
          <h1>Events in Los Angeles</h1>
          <ul>
            {la.map(event => <EventIndexItem key={event.id} event={event} />)}

          </ul>
        </div>
        <div className='nyevents'>
          <h1>Events in New York</h1>
          <ul>
            {ny.map(event => <EventIndexItem key={event.id} event={event} /> )}
          
          </ul>
        </div>
      </div>
    );
  }
}

export default EventsIndex;