// src/SignIn.js

import React from 'react';
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase-utils'


import "./signin.scss"

import { singInWithGoogle } from "../../firebase/firebase-utils"

class SignIn extends React.Component  {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log()
      this.setState({email: this.state.email, password: this.state.password})
      console.log(this.state)
      try {
        await auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      } catch(error) {
        console.log(error)
      }
     

  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }
  
  render() {
    const {email, password} = this.state
    return (
      <div className="container">
          <div className="login-box">
          <h2>Sign In</h2>
          <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                  <input type="email" name='email' value={email} onChange={this.handleChange} required />
                  <label>Email </label>
              </div>
              <div className="input-group">
                  <input type="password" name='password' value={password} onChange={this.handleChange} required />
                  <label>Password</label>
              </div>
              <button type="submit" className="btn get-started-btn">Login</button>
              <button onClick={singInWithGoogle} type="button" className="social-btn google-btn">
                  <img  src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                  Sign in with Google
              </button>
              <p className="register-link text-sm font-light text-gray-500 dark:text-gray-400">Don't have an account? <Link to="/signup"> Register</Link></p>
          </form>
          </div>
    </div>
    );
  }
};

export default SignIn;
