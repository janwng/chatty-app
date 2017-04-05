import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  render() {
    return (
      console.log("Rendering <App/>");
      
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>

        <main className="messages">
          <MessageList />

          <div className="message system">
            Anonymous1 changed their name to nomnom.
          </div>
        </main>
        <Chatbar />
      </div>
    );
  }
}
export default App;
