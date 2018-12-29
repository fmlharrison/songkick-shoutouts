import React, { Component } from "react";

import SignUpForm from "./SignUpForm";

import "./SignUp.css";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="signup-container">
        <h1>SignUp to Songkick Shoutouts</h1>
        <SignUpForm />
      </div>
    );
  }
}

export default SignUpContainer;
