import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };

    //this.state = this.state.bind(this);
    this.onNewMessage = this.onNewMessage.bind(this);
  }


  onNewMessage(msgContent) {
    let messages = this.state.messages;
    let newMessage = messages.concat(
      {
      id: messages[messages.length - 1].id + 1,
      username: this.state.currentUser.name,
      content: msgContent
    })

    this.setState({messages: newMessage});
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
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
