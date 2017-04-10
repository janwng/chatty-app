import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: 'Anonymous'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      notifications: [],
      connections: 0,
      connectionLost: []
    };

    this.onNewMessage = this.onNewMessage.bind(this);
    this.onNewUsername = this.onNewUsername.bind(this);
  }

  // Function to create new messages
  onNewMessage(msgContent) {
    let newMessage =
      {
        type: 'postMessage',
        username: this.state.currentUser.name,
        content: msgContent
      }
    // Send the message to the chatty server
    this.socket.send(JSON.stringify(newMessage));
  }

  // Function to create new username
  onNewUsername(name) {
    let newUsername =
    {
      type: 'postUsername',
      username: name,
      notification: this.state.currentUser.name + ' has changed their name to ' + name
    }
    // Send the message to the chatty server
    this.socket.send(JSON.stringify(newUsername));
  }

  componentDidMount() {
    // Open a connection
    this.socket = new WebSocket('ws://localhost:3001/');
    let parent = this;

    // When a connection is made...
    this.socket.onopen = () => {
      console.log('I got a connection!');

      // Receive message from server and console log it
      this.socket.onmessage = function(event) {
        let receivedMessage = JSON.parse(event.data);

        let stateMessages = parent.state.messages;
        let stateUsername = parent.state.currentUser.name;
        let stateNotifications = parent.state.notifications;
        let stateConnectionLost = parent.state.connectionLost;

        switch(receivedMessage.type) {
          case 'postMessage':
            let newMessage = stateMessages.concat(receivedMessage);
            parent.setState({messages: newMessage});

            console.log("MESSAGE:", newMessage);
            break;

          case 'postUsername':
            parent.setState({currentUser: {name: receivedMessage.username}});

            let newNotification = stateNotifications.concat(receivedMessage.notification);
            parent.setState({notifications: newNotification});

            console.log("change username to:", parent.state.currentUser.name);
            break;

          case 'connectionGain':
            parent.setState({connections: receivedMessage.connections});
            break;

          case 'connectionLost':
            parent.setState({connections: receivedMessage.connections});

            let newConnectionLost = stateConnectionLost.concat(parent.state.currentUser.name + ' has left the channel.');
            parent.setState({connectionLost: newConnectionLost})
            break;
        }
      }
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <p className="online-users">{this.state.connections} user(s) online</p>
        </nav>

        <MessageList messages={this.state.messages} notifications={this.state.notifications} connectionLost={this.state.connectionLost}/>

        <Chatbar currentUser={this.state.currentUser.name} onNewMessage={this.onNewMessage} onNewUsername={this.onNewUsername}/>
      </div>
    );
  }

}
export default App;
