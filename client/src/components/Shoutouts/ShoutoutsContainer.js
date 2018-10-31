import React, { Component } from "react";
import firebase from "../../config/firebase";

import Shoutouts from "./Shoutouts";
import Sidebar from "./Sidebar/SidebarContainer";

import "./Shoutouts.css";

const shoutOutsDb = firebase.database().ref("shoutouts");

class ShoutoutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoutOuts: []
    };
  }

  componentDidMount() {
    shoutOutsDb.on("value", snapshot => {
      const data = this.formatShoutouts(snapshot.val())
      this.setState({ shoutOuts: this.orderShoutouts(data) });
    });
  }

  formatShoutouts = data => {
    return Object.values(data);
  };

  updateShoutouts = shoutouts => {
    this.setState({ shoutOuts: this.orderShoutouts(shoutouts) });
  };

  orderShoutouts = data => {
    return data.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
  };

  render() {
    return (
      <div className="main">
        <div className="shout-outs">
          {this.state.shoutOuts.map(shout => {
            return <Shoutouts shoutout={shout} />;
          })}
        </div>
        <Sidebar updateShoutouts={this.updateShoutouts} />
      </div>
    );
  }
}

export default ShoutoutsContainer;
