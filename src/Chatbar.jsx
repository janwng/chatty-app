import React, {Component} from 'react';

class Chatbar extends Component {
  render() {
    const chatbarUsername = this.props.currentUser;
    const chatbarMessage = 'Type a message and hit ENTER';
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={chatbarUsername} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default Chatbar;
