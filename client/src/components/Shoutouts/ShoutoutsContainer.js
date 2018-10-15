import React, { Component } from "react";

import Shoutouts from "./Shoutouts";
import Sidebar from "./Sidebar/SidebarContainer";

import "./Shoutouts.css";

class ShoutoutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoutOuts: []
    };
  }

  componentDidMount = () => {
    this.fetchShoutouts()
      .then(res => {
        this.setState({ shoutOuts: this.orderShoutouts(res) });
      })
      .catch(err => console.log(err));
  };

  fetchShoutouts = async () => {
    const response = await fetch("/api/shoutouts");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
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
