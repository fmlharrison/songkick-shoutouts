import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShoutoutsContainer from "./components/Shoutouts/ShoutoutsContainer";
import SignUpContainer from "./components/Authentication/Signup/SignUpContainer";
import SignInContainer from "./components/Authentication/SignIn/SignInContainer";

import { withAuthentication } from "./components/Session";
import * as routes from "./constants/routes";

import "./App.css";

const App = () => (
  <Router>
    <div className="app">
      <div className="page">
        <Header />
        <Route exact path={routes.LANDING} component={ShoutoutsContainer} />
        <Route exact path={routes.SIGN_UP} component={SignUpContainer} />
        <Route exact path={routes.SIGN_IN} component={SignInContainer} />
      </div>
      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
