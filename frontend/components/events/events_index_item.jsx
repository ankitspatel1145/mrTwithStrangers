import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = (props) => {
  let event = props.event
  return (
    <div>

      <p>{event.city}</p>
    </div>

  )
}

export default EventIndexItem