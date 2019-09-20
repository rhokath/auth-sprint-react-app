import React from "react";
import axios from 'axios';

class Register extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      },
      isLoading: false
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    register = e => {
      e.preventDefault();
      axios
        .post('http://localhost:3300/api/auth/register', this.state.credentials)
        .then(res => {
          console.log(res)
        //   localStorage.setItem('token', res.data.payload);
          this.props.history.push('/login');
        })
        .catch(err => console.log(err.response));
    };
  
    render() {
      return (
        <div className="login">
          <form className="loginForm" onSubmit={this.register}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button className="loginBtn">Register</button>
          </form>
        </div>
      );
    }
  }
  
  
  
  export default Register;