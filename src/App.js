import React, { Component } from "react";
import "./App.css";

import skLogo from "./images/songkick_badge_pink.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoutOuts: [],
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
      shoutOuts: [...this.state.shoutOuts, shoutOut],
      recipient: "",
      shouter: "",
      message: ""
    });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={skLogo} alt="Songkick logo" className="logo" />
          <p className="text">Songkick Shoutouts</p>
        </header>
        <div className="main">
          <div className="shout-outs">
            {this.state.shoutOuts.map(shout => {
              return (
                <div class="shoutout-container">
                  <p class="recipient">{shout.recipient}</p>
                  <p class="from">{shout.shouter}</p>
                  <p class="message">{shout.message}</p>
                </div>
              )
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
    );
  }
}

export default App;

// className App extends Component {
//   render() {
//     return (
//       <div classNameName="App">
//         <header classNameName="App-header">
//           <img src={logo} classNameName="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             classNameName="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
