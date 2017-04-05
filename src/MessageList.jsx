import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <div className="message">
        {
          this.props.messages.map((currentMessage) => {
            return <Message message={currentMessage} key={currentMessage.id} />
          })
        }
      </div>
    );
  }
}

export default MessageList;
