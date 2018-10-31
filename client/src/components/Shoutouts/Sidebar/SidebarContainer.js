import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from "../../../config/firebase";

import "./Sidebar.css";
import Sidebar from "./Sidebar";

const shoutOutsDb = firebase.database().ref("shoutouts");

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

  saveShoutout = data => {
    const newRef = shoutOutsDb.push();
    data.createdAt = firebase.database.ServerValue.TIMESTAMP;
    data.id = newRef.key;

    newRef.set(data, error => {
      if (error) {
        console.log(error);
      } else {
        this.setState({
          recipient: "",
          shouter: "",
          message: ""
        });
      }
    });
  };

  saveSubmittedShoutout = shoutOut => {
    this.saveShoutout(shoutOut);
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
  updateShoutouts: PropTypes.func.isRequired
};

export default SidebarContainer;
