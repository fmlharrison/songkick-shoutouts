import React, { Component } from "react";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  displayName: "",
  username: "",
  email: "",
  password: "",
  repeatedPassword: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    const targetEvent = event.target;
    this.setState({ [targetEvent.name]: targetEvent.value });
  };

  render() {
    const {
      displayName,
      username,
      email,
      password,
      repeatedPassword,
      error
    } = this.state;

    return (
      <form onSubmit={this.onSubmit} class="sign-up-form">
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={this.onChange}
          placeholder="Enter a display name."
          class="display-name"
        />
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Enter a username."
          class="username"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Enter a email."
          class="email"
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Enter a password."
          class="password"
        />
        <input
          type="text"
          name="repeatedPassword"
          value={repeatedPassword}
          onChange={this.onChange}
          placeholder="Re-enter your password."
          class="password"
        />
        <button type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

SignUpForm.prototype = {
  onCompletedSignUpForm: PropTypes.func
};

export default SignUpForm;
