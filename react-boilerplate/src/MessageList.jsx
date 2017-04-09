import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';
import LeftChannel from './LeftChannel.jsx';


class MessageList extends Component {
  render() {
    return (
      <main className="messages">
        {
          this.props.notifications.map((currentNotification) => {
            return <Notification notification={currentNotification} key={currentNotification} />
          })
        }
        {
          this.props.messages.map((currentMessage) => {
            return <Message message={currentMessage} key={currentMessage.id} />
          })
        }
        {
          this.props.connectionLost.map((currentLeaveMsg) => {
            return <LeftChannel leftChannel={currentLeaveMsg} key={currentLeaveMsg} />
          })
        }
      </main>
    );
  }
}

export default MessageList;
