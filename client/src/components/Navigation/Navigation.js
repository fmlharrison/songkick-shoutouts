import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import SignOut from "../Authentication/SignOut";
import { AuthUserContext } from "../Session";

import * as routes from "../../constants/routes";

import "./Navigation.css";

class Navigation extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     user: this.props.user
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ user: nextProps.user });
  // }

  renderNavLinks = (authUser) => {
    if (authUser) {
      return (
        <ul className="navigation-links">
          <li>
            <Link to={routes.LANDING}>Home</Link>
          </li>
          <li>
            <SignOut />
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navigation-links">
          <li>
            <Link to={routes.LANDING}>Home</Link>
          </li>
          <li>
            <Link to={routes.SIGN_IN}>Sign In</Link>
          </li>
        </ul>
      );
    }
  };

  render() {
    return (
      <div className="navigation">
        <AuthUserContext.Consumer>
          {authUser => this.renderNavLinks(authUser)}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}

// Navigation.propTypes = {
//   user: PropTypes.shape({
//     id: PropTypes.string,
//     displayName: PropTypes.string,
//     username: PropTypes.string,
//     email: PropTypes.string
//   })
// };

export default Navigation;
