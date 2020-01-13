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
    const user = { email: "demo@twithstrangers.com", password: "password" };
    this.props.processForm(user);
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
    let button = <button className="session-submit" onClick={this.handleSubmitDemo}>Login with Demo User</button>
    let submitButtonVal = "Log In"
    let header =" Hey stranger!"
    let text = "It's good to have you back. Sign in here and sign up to hang out with Mr.T !"
    if (this.props.formType === "signup"){
      submitButtonVal = "Sign Up";
      header = "Join for Mr. T time"
      text = "1000s of strangers across the world have sat together for conversations.Create an account and you'll be on your way to join the community."
      firstName = (
        <input type="text"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.update('first_name')}
          className="login-input"
        />
      )
      city = (

        <select name="Cities" className="dropdown" onChange={this.update('city')}>
          <option value="Pick a city" selected="selected" disabled>Pick a city</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Other">Other</option>
        </select>

      )
      button = null
    }
    return (
      <div className="form-container">
        
        <form onSubmit={this.handleSubmit} className="login-form">
            <div className="header-text">
              <h1>{header}</h1>
            </div>
            <div className="text-text">
              <p>{text}</p>
            </div >
            <div className="errors">
              {this.renderErrors()}
            </div>
              
            <div className="containter-form" >
              {firstName}
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
              <input type="password"
                placeholder="pasword"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
              {city}
              <button className="session-submit" type="submit" value={this.props.formType}>{submitButtonVal}</button>
              {button}
             </div>
           
              <div className="auth-flip">
                <p>
                   Please {this.props.formType} or  {this.props.navLink}
                </p>
              </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
