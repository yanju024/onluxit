// src/SignUp.js

import React from "react";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase-utils'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSignUp = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      alert("Sign Up Successful!");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };
  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSignUp}>
          <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                    Create an account
                  </h1>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                      required
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      value={email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                      
                    >
                      Confirm password
                    </label>
                    <input
                      type="confirm-password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={confirmPassword}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                     ̰
                    <div className="ml-3 text-sm">
                      <label for="terms" className="font-light text-gray-500 ">
                        I accept the{" "}
                        <Link
                          className="font-medium text-primary-600 hover:underline "
                          href="#"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" get-started-btn w-full text-white  focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="font-medium text-primary-600 hover:underline "
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default SignUp;
