import React, { Component } from "react";
import PropTypes from "prop-types";

class Sidebar extends Component {
  handleChange = event => {
    const target = event.currentTarget;
    const inputType = target.dataset.inputType;
    this.props.handleFormInput(inputType, target.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    const shoutOut = {
      recipient: this.props.recipient,
      shouter: this.props.shouter,
      message: this.props.message
    };

    this.props.submitNewShoutout(shoutOut);
  };

  render() {
    return (
      <div>
        <h1>Got a Shoutout for someone?</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            className="form-item recipient"
            value={this.props.recipient}
            onChange={this.handleChange}
            data-input-type="recipient"
            placeholder="For who?"
          />
          <input
            type="text"
            className="form-item shouter"
            value={this.props.shouter}
            onChange={this.handleChange}
            data-input-type="shouter"
            placeholder="Who are you?"
          />
          <textarea
            type="text"
            className="form-item message"
            value={this.props.message}
            onChange={this.handleChange}
            data-input-type="message"
            placeholder="What's your shoutout?"
          />
          <input type="submit" className="form-item submit" value="Shout it!" />
        </form>
      </div>
    );
  }
}

Sidebar.propTypes = {
  submitNewShoutout: PropTypes.func.isRequired,
  handleFormInput: PropTypes.func.isRequired,
  recipient: PropTypes.string.isRequired,
  shouter: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Sidebar;
