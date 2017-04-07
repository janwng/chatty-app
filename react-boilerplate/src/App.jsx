import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };

    this.onNewMessage = this.onNewMessage.bind(this);
    
  }

  //
  // onNewMessage(msgContent) {
  //   let messages = this.state.messages;
  //   let newMessage = messages.concat(
  //     {
  //     id: messages[messages.length - 1].id + 1,
  //     username: this.state.currentUser.name,
  //     content: msgContent
  //   })
  //
  //   this.setState({messages: newMessage});
  // }

  // Function to create new messages
  onNewMessage(msgContent) {
    let messages = this.state.messages;
    let newMessage =
      {
        type: 'postMessage',
        username: this.state.currentUser.name,
        content: msgContent
      }

    // Send the message to the chatty server
    this.socket.send(JSON.stringify(newMessage));
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
        console.log('Incoming message:', event.data);

        let receivedMessageObject = JSON.parse(event.data);

        let newMessages = parent.state.messages;
        let newMessage = newMessages.concat(receivedMessageObject);
        parent.setState({messages: newMessage});
      }
    }

    // console.log("componentDidMount <App />");
    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages});
    // }, 3000);
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

        <Chatbar currentUser={this.state.currentUser.name} onNewMessage={this.onNewMessage}/>
      </div>
    );
  }

}
export default App;
