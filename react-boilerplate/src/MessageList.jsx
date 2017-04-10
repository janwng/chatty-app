import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {
  render() {
    return (
      <main className="messages">
        {
          this.props.messages.map((currentMessage) => {
            if (currentMessage.type === 'postMessage') {
              return <Message message={currentMessage} key={currentMessage.id} />
            } else if (currentMessage.type === 'postUsername') {
              return <Notification notification={currentMessage.notification} key={currentMessage.id} />
            }
          })
        }
      </main>
    );
  }
}

export default MessageList;
