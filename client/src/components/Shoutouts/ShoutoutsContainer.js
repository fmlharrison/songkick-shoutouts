import React, { Component } from "react";
import { compose } from "recompose";

import Shoutouts from "./Shoutouts";
import Sidebar from "./Sidebar/SidebarContainer";

import { withFirebase } from "../Firebase";

import "./Shoutouts.css";

class ShoutoutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoutOuts: []
    };
  }

  componentDidMount() {
    this.props.firebase.shoutoutsDb().on("value", snapshot => {
      const data = this.formatShoutouts(snapshot.val());
      this.setState({ shoutOuts: this.orderShoutouts(data) });
    });
  }

  formatShoutouts = data => {
    if (!data) return [];
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

export default compose(withFirebase)(ShoutoutsContainer);
