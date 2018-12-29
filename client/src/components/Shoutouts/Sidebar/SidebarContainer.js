import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Sidebar.css";
import Sidebar from "./Sidebar";

import { withFirebase } from "../../Firebase";

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
    const newRef = this.props.firebase.databaseReference().push();
    data.createdAt = this.props.firebase.databaseTimeStamp();
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

export default withFirebase(SidebarContainer);
