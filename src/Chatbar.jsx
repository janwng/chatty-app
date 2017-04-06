import React, {Component} from 'react';

class Chatbar extends Component {

  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.props.onNewMessage(event.target.value);
    }
  }

  render() {
    const chatbarUsername = this.props.currentUser;
    const chatbarMessage = 'Type a message and hit ENTER';
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          defaultValue={chatbarUsername} />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.handleKeyPress} />
      </footer>
    );
  }
}

export default Chatbar;
