import React, { Component } from "react";

class CheckoutButton extends Component {
  render() {
    const {onClick, text} = this.props;

    return (
      <button type="btn" className="btn btn-primary btn-block btn-lg" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default CheckoutButton;