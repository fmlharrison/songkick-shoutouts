import React from "react";
import { Link } from "react-router-dom";

import SignOut from "../Authentication/SignOut";

import * as routes from "../../constants/routes";

import "./Navigation.css";

const Navigation = () => (
  <div className="navigation">
    <ul className="navigation-links">
      <li>
        <Link to={routes.LANDING}>Home</Link>
      </li>
      <li>
        <Link to={routes.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <Link to={routes.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
  </div>
);

export default Navigation;
