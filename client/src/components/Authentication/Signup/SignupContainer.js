import React, { Component } from "react";
import PropTypes from "prop-types";

export class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="sidebar">
        <h1>This is the page that the user signs up on!!</h1>
      </div>
    );
  }
}

SignupContainer.propTypes = {
};

export default SignupContainer;
