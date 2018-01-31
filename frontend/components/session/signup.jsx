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
          <div key={`error-${i}`}>
            {error}
          </div>
        )) : ""}
      </ul>
    );
  }


  render () {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          {this.renderErrors()}
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>

          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
          </label>

          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}



export default Signup;
