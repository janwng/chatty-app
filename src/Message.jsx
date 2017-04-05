import React, {Component} from 'react';

class Message extends Component {
  render() {
    const msgUsername = this.props.message.username;
    const msgContent = this.props.message.content;
    return (
      <div className="message">
        <span className="message-username">{msgUsername}</span>
        <span className="message-content">{msgContent}</span>
      </div>
    );
  }
}

export default Message;
