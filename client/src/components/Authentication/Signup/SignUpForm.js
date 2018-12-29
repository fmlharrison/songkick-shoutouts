import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../../Firebase";
import * as routes from "../../../constants/routes";

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

  onSubmit = event => {
    event.preventDefault();
    const { displayName, username, email, password } = this.state;

    if (email.split("@")[1] !== "songkick.com") {
      return this.setState({
        error: { message: "Email must be a '@songkick.com' email." }
      });
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        const id = authUser.user.uid
        return this.props.firebase.user(id).set({
          id,
          displayName,
          username,
          email
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(routes.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });
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

    const isInvalid =
      password !== repeatedPassword ||
      password === "" ||
      displayName === "" ||
      username === "" ||
      email === "";

    return (
      <form onSubmit={this.onSubmit} className="sign-up-form">
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={this.onChange}
          placeholder="Enter a display name."
          className="form-input"
          required
        />
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Enter a username."
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Enter a email."
          className="form-input"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Enter a password."
          className="form-input"
          required
        />
        <input
          type="password"
          name="repeatedPassword"
          value={repeatedPassword}
          onChange={this.onChange}
          placeholder="Re-enter your password."
          className="form-input"
          required
        />
        <button type="submit" disabled={isInvalid} className="sign-up-button">
          Sign Up
        </button>

        {error && <p className="error-message">{error.message}</p>}
      </form>
    );
  }
}

export default compose(
  withRouter,
  withFirebase
)(SignUpForm);
