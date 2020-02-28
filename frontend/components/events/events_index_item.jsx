import React from 'react';
import { Link } from 'react-router-dom';



class EventIndexItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = this.props

    this.addUser = this.addUser.bind(this)
  }

  addUser(e) {
    e.preventDefault()
    this.setState(()=> this.state.event.atendees.push(this.props.currentUser))
    let id = this.props.event.id
    
    console.log(id) 
    let button = document.getElementById(id)
    alert("Event Added")
  }


  render(){
    let event = this.props.event
    return (
      <div className='eventitems-p'>

        <Link to={`/events/${this.props.event.id}`}>
          <div className="eventitems">
            <div className='event-time'>
              <p>{event.date}</p>
              <p className='time'>{event.time}</p>
            </div>
            <p>{event.address}</p>
            <p>{event.spots}</p>
          </div>
        </Link>
        <button id={this.props.event.id} onClick={this.addUser} >Join Event</button>
      </div>
    )
  }
}

export default EventIndexItem