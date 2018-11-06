import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShoutoutsContainer from "./components/Shoutouts/ShoutoutsContainer";
import SignupContainer from "./components/Authentication/Signup/SignupContainer";

import * as routes from "./constants/routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="page">
            <Header />
            <Route exact path={routes.LANDING} component={ShoutoutsContainer} />
            <Route exact path={routes.SIGN_UP} component={SignupContainer} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
