import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component{


  componentDidMount(){

    this.props.getEvent(this.props.match.params.eventId);
  }

  render() {



    if (!this.props.event) {
      return null
    }
    let event = this.props.event
    return(
      <div className='mainshow'>
        <h1 className='mainh'>Make sure you can attend the event. Or else Mr. T will hunt you down</h1>
        <div className='showitem'>
          <h1 className='sectit'>Mr. T will be here!</h1>
          <div className='showinfo'>
            <ul>

              <li>{event.date}</li>
              <li>{event.time}</li>
              <li>{event.address}</li>
              <li>{event.city}</li>
              <li>{event.description}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}


export default EventShow