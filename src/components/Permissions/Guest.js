import React, { Component } from 'react';

class Guest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isGuest } = this.props;
    if (isGuest) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

export default Guest;
