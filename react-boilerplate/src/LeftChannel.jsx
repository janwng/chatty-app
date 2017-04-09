import React, {Component} from 'react';

class LeftChannel extends Component {
  render() {
    const leftChannel = this.props.leftChannel;
    return (
      <div className="message system">
        <span>{leftChannel}</span>
      </div>
    );
  }
}

export default LeftChannel;
