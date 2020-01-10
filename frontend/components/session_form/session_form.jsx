import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleSubmitDemo(e) {
    e.preventDefault();
    const user = { email: "demo@twithstrangers.com", password: "password" }
    this.props.processForm(user)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let firstName;
    let city;
    if (this.props.formType === "signup"){
      firstName = (
      <div>
        <label>First Name:
                <input type="text"
            value={this.state.firstName}
            onChange={this.update('first_name')}
            className="login-input"
            />
        </label>
        <br/>
      </div>
      )
      city = (
        <div>
        <label>City:
                <input type="text"
            value={this.state.city}
            onChange={this.update('city')}
            className="login-input"
            />
        </label>
        <br/>
        </div>
      )
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Mr T. with Strangers!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            {firstName}
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br />
            {city}
   
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <button className="demo-user" onClick={this.handleSubmitDemo}>Login with Demo User</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
