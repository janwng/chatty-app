import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log(Message);
    const msgUsername = 'Anonymous1';
    const msgContent = 'I wont be impressed with technology until I can download food.';
    return (
      <div>
        <span className="message-username">{msgUsername}</span>
        <span className="message-content">{msgContent}</span>
      </div>
    );
  }
}

export default Message;
