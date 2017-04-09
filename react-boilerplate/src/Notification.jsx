import React, {Component} from 'react';

class Notification extends Component {
  render() {
    const notification = this.props.notification;
    return (
      <div className="message system">
        <span>{notification}</span>
      </div>
    );
  }
}

export default Notification;
