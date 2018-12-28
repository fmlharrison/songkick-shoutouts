import React, { Component } from "react";
import PropTypes from "prop-types";

export class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="signup-container">
        <h1>SignUp to Songkick Shoutouts</h1>
      </div>
    );
  }
}

SignUpContainer.propTypes = {
};

export default SignUpContainer;
