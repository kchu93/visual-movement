import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => this.setState({[type]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    (this.props.login(this.state).then(() =>
      (this.props.params.path !== "/") ? this.props.history.push("/") : undefined
    ));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors ? this.props.errors.map((error,i) => (
          <li
            className="error-text"
            key={`error-${i}`}>
            {error}
          </li>
        )) : ""}
      </ul>
    );
  }

  loginDemo(e) {
    e.preventDefault();
    const demoAccount = {username:"demoaccount", password:"demopassword"};
    this.props.login(demoAccount);
  }

  render (){
    return (
      <div className="session-form">
        <h2 className="header-sign">SIGN IN</h2>
        <br/>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <br/>
          <label>
            <input
              className="login-input"
              placeholder="Username"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>
          <br/>
          <label>
            <input
              className="login-input"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>
          <br/>
          <br/>
          <div className="login-btn-container">
            <input className="login-btn" type="submit" value="SIGN IN" />
            <button className="demo-btn" onClick={this.loginDemo}>DEMO</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
