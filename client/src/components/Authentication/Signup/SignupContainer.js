import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../../Firebase";

import SignUpForm from "./SignUpForm";

import "./SignUp.css";

const ConnectedSignUpForm = withRouter(withFirebase(SignUpForm));

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="signup-container">
        <h1>SignUp to Songkick Shoutouts</h1>
        <ConnectedSignUpForm />
      </div>
    );
  }
}

export default SignUpContainer;
