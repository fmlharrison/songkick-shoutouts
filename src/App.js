import React, { Component } from "react";
import "./App.css";

import skLogo from "./images/songkick_badge_pink.png";

const cannedShoutouts = [
  {
    recipient: "Alice",
    shouter: "Felix",
    message: "For trying so hard to get the crew Glastonbury tickets!!"
  },
  {
    recipient: "Joe",
    shouter: "Alexey",
    message: "For being a kick ass tech lead!!"
  },
  {
    recipient: "Felix",
    shouter: "Joe",
    message: "For beating me so convincingly at table tennis."
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoutOuts: cannedShoutouts,
      recipient: "",
      shouter: "",
      message: ""
    };
  }

  handleChange = event => {
    const target = event.currentTarget;
    const inputType = target.dataset.inputType;
    this.setState({ [inputType]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const shoutOut = {
      recipient: this.state.recipient,
      shouter: this.state.shouter,
      message: this.state.message
    };

    this.setState({
      shoutOuts: [shoutOut, ...this.state.shoutOuts],
      recipient: "",
      shouter: "",
      message: ""
    });
  };

  render() {
    return (
      <div className="app">
        <div className="page">
          <header className="header">
            <img src={skLogo} alt="Songkick logo" className="logo" />
            <p className="text">Songkick Shoutouts</p>
          </header>
          <div className="main">
            <div className="shout-outs">
              {this.state.shoutOuts.map(shout => {
                return (
                  <div className="shoutout-container">
                    <p className="recipient">For: {shout.recipient}</p>
                    <p className="from">From: {shout.shouter}</p>
                    <p className="message">{shout.message}</p>
                  </div>
                );
              })}
            </div>
            <div className="sidebar">
              <h1>Got a Shoutout for someone?</h1>
              <form onSubmit={this.handleSubmit} className="form">
                <input
                  type="text"
                  className="form-item recipient"
                  value={this.state.recipient}
                  onChange={this.handleChange}
                  data-input-type="recipient"
                  placeholder="For who?"
                />
                <input
                  type="text"
                  className="form-item shouter"
                  value={this.state.shouter}
                  onChange={this.handleChange}
                  data-input-type="shouter"
                  placeholder="Who are you?"
                />
                <textarea
                  type="text"
                  className="form-item message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  data-input-type="message"
                  placeholder="What's your shoutout?"
                />
                <input
                  type="submit"
                  className="form-item submit"
                  value="Shout it!"
                />
              </form>
            </div>
          </div>
        </div>
        <footer className="footer">Made by Songkick. We all own this!</footer>
      </div>
    );
  }
}

export default App;
