import React from 'react';


class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewUser(this.state).then(() => this.props.history.push("/"));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors ? this.props.errors.map((error,i) => (
          <div
            className="error-text-signup"
            key={`error-${i}`}>
            {error}
          </div>
        )) : ""}
      </ul>
    );
  }


  render () {
    return (
      <div className="session-form">
        <h2 className="header-signup">Sign Up</h2>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          {this.renderErrors()}
          <br/>
          <label>
            <input
              className="signin-input"
              placeholder="Username"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>
          <br/>
          <label>
            <input
              className="signin-input"
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
          </label>
          <br/>
          <label>
            <input
              placeholder="Password"
              className="signin-input"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>
          <br/>
          <input className="signin-btn" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}



export default Signup;
