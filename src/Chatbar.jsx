import React, {Component} from 'react';

class Chatbar extends Component {
  render() {
    const chatbarUsername = 'Your Name (Optional)';
    const chatbarMessage = 'Type a message and hit ENTER';
    return (
      console.log(Chatbar);
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={"Your Name (Optional)"} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default Chatbar;
