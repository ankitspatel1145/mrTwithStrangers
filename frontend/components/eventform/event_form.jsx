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
      "spots": 4,
      "description": ""
    }
  }


  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  render() {
    console.log(this.props)
    return (
      <h1>this is a form</h1>
    )
  }

}

export default withRouter(EventForm)