import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = (props) => {
  let event = props.event
  return (
    <div className='eventitems-p'>

      <Link to={`/events/${props.event.id}`}>
        <div className="eventitems">
          <div className='event-time'>
            <p>{event.date}</p>
            <p className='time'>{event.time}</p>
          </div>
          <p>{event.address}</p>
          <p>{event.spots}</p>
        </div>
      </Link>
      <button>Join Event</button>
    </div>
  )
}

export default EventIndexItem