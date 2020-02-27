import React from 'react';
import { withRouter } from 'react-router';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "host_id": 4,
      "date": "",
      "city": "",
      "state": "",
      "address": "",
      "time": "",
      "spots": "",
      "description": ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }


  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let event = this.state
    this.props.createEvent(event)
      .then(thing => this.props.history.push('/events'))
      // .then(action => this.props.history.push(`/projects/${action.project.id}`))
  }

  render() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; 
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    if (month < 10){
      month = "0" + month      
    }
    if (day < 10) {
      day = "0" + day
    }

    let today = year + "-" + month + "-" + day;
    // console.log(this.props)
    return (
      <div className="form-container">

        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="header-text">
            <h1>Host an Event!</h1>
          </div>

          <div className="errors">
            {/* {this.renderErrors()} */}
          </div>

          <div className="containter-form" >

            <input type="date"
              value={this.state.date}
              min={today}
              onChange={this.update('date')}
              className="login-input"
            />

            <input type="time"
              value={this.state.time}
              onChange={this.update("time")}
            />
   
            <select defaultValue="" name="Cities" className="dropdown" onChange={this.update('city')}>
              <option value="" disabled>Pick a city</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Other">Other</option>
            </select>

            <select defaultValue="" name="state" className="dropdown" onChange={this.update('state')}>
              <option value="" disabled>Pick a State</option>
              <option value="CA">CA</option>
              <option value="NY">NY</option>
              <option value="Other">Other</option>
            </select>

            <input type="address"
              placeholder="Address"
              value={this.state.address}
              onChange={this.update('address')}
              className="login-input"
            />
            <input type="spots"
              placeholder="Number of open seats"
              value={this.state.spots}
              onChange={this.update('spots')}
              className="login-input"
            />
            <input type="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.update('description')}
              className="login-input"
            />

            <button className="session-submit" type="submit" value={this.props.formType}>Create Event</button>

          </div>

        </form>
      </div>
    )
  }

}

export default withRouter(EventForm)