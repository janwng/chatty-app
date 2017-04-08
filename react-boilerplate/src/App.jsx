import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: 'Anonymous'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };

    this.onNewMessage = this.onNewMessage.bind(this);
<<<<<<< HEAD
<<<<<<< HEAD
    // this.onNewUsername = this.onNewUsername.bind(this);
=======
    this.onNewUsername = this.onNewUsername.bind(this);
>>>>>>> 2deb149eb62a8198cf4141651a71259fa4cff88f
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function to change username
  handleChange(event){
    this.setState({currentUser.name: event.target.value});
  }

  // Function to output message if username is changed
  handleSubmit(event) {
    alert('Name got changed:' + this.state.currentUser.name);
    event.preventDefault;
=======
    this.onNewUsername = this.onNewUsername.bind(this);
>>>>>>> switch-test
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
  
  // onNewUsername(name) {
  //   // let username = this.state.currentUser.name;
  //   let newUsername =
  //     {
  //       type: 'postUsername',
  //       username: name
  //     }
  //   // Send the message to the chatty server
  //   this.socket.send(JSON.stringify(newUsername));
  // }

  // Function to create new username
  onNewUsername(name) {
    let newUsername =
    {
      type: 'postUsername',
      username: name
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

        switch(receivedMessage.type) {
          case 'postMessage':
            let newMessage = stateMessages.concat(receivedMessage);
            parent.setState({messages: newMessage});
            break;

          case 'postUsername':
            parent.setState({currentUser: {name: receivedMessage.username}});
            console.log("set state username:", parent.state.currentUser.name);
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
        </nav>

        <MessageList messages={this.state.messages} />

        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>

        <Chatbar currentUser={this.state.currentUser.name} onNewMessage={this.onNewMessage} onNewUsername={this.onNewUsername}/>
      </div>
    );
  }

}
export default App;
