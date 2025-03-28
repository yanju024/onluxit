// src/SignIn.js

import React, { useState } from 'react';
import {Link} from 'react-router-dom'


import "./signin.scss"

import { singInWithGoogle } from "../../firebase/firebase-utils"

const SignIn = () => {


  

  return (
    <div className="container">
        <div className="login-box">
        <h2>Sign In</h2>
        <form>
            <div className="input-group">
            <input type="text" required />
            <label>Username</label>
            </div>
            <div className="input-group">
            <input type="password" required />
            <label>Password</label>
            </div>
            <button type="submit" className="btn get-started-btn">Login</button>
            <button onClick={singInWithGoogle} type="button" className="social-btn google-btn">
            <img  src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
            Sign in with Google
            </button>
            <button type="button" className="social-btn linkedin-btn">
            <img src="https://img.icons8.com/color/16/000000/linkedin.png" alt="LinkedIn logo" />
            Sign in with LinkedIn
            </button>
            <p className="register-link text-sm font-light text-gray-500 dark:text-gray-400">Don't have an account? <Link to="/signup"> Register</Link></p>
        </form>
        </div>
  </div>
  );
};

export default SignIn;
