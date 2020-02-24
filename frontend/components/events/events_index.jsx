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
    let current_datetime = new Date()
    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
    console.log(formatted_date)
    console.log('test')
    let events = this.props.events
    let la = events.filter(event => event.city === "Los Angeles")
    let ny = events.filter(event => event.city === "New York")
    let sf = events.filter(event => event.city === "San Francisco")
    // debugger
    return(
      
      <div className='eventsindex'>

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
        <div className='city'>
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
      </div>
    );
  }
}

export default EventsIndex;