import React, {Component} from 'react';

class Chatbar extends Component {

  constructor(props){
    super(props);
    this.handleKeyPressUsername = this.handleKeyPressUsername.bind(this);
    this.handleKeyPressMessage = this.handleKeyPressMessage.bind(this);

  }

  handleKeyPressUsername(event) {
    if(event.key === 'Enter'){
      this.props.onNewUsername(event.target.value);
    }
  }

  handleKeyPressMessage(event) {
    if(event.key === 'Enter'){
      this.props.onNewMessage(event.target.value);
    }
  }

  render() {
    const chatbarUsername = this.props.currentUser.name;
    const chatbarMessage = 'Type a message and hit ENTER';
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          defaultValue={chatbarUsername}
          onKeyPress={this.handleKeyPressUsername} />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.handleKeyPressMessage} />
      </footer>
    );
  }
}

export default Chatbar;
