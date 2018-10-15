import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Sidebar.css";
import Sidebar from "./Sidebar";

export class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: "",
      shouter: "",
      message: ""
    };
  }

  updateForm = (type, value) => {
    this.setState({ [type]: value });
  };

  saveShoutout = async data => {
    const response = await fetch("/api/shoutouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  saveSubmittedShoutout = shoutOut => {
    this.saveShoutout(shoutOut).then(res => {
      this.props.updateShoutouts(res)
      this.setState({
        recipient: "",
        shouter: "",
        message: ""
      });
    });
  };

  render() {
    return (
      <div className="sidebar">
        <h1>Got a Shoutout for someone?</h1>
        <Sidebar
          submitNewShoutout={this.saveSubmittedShoutout}
          handleFormInput={this.updateForm}
          recipient={this.state.recipient}
          shouter={this.state.shouter}
          message={this.state.message}
        />
      </div>
    );
  }
}

SidebarContainer.propTypes = {
  updateShoutouts: PropTypes.func.isRequired,
};

export default SidebarContainer;
