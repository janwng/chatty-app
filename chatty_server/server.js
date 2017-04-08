const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
var uuidV1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

  // Broadcast to all connected clients
  wss.broadcast = function broadcast(data) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  };

  // Set up a callback that will run when a client connects to the server
  // When a client connects they are assigned a socket, represented by
  // the ws parameter in the callback.
  wss.on('connection', (ws) => {
    console.log('Client connected');

  //When message is received from client
  ws.on('message', function(message) {
    let incomingMessage = JSON.parse(message);
    let uuid = uuidV1();
    let outgoingMessage = {};

    // let outgoingMessage = JSON.stringify({id: uuid, username: incomingMessage.username, content: incomingMessage.content});

    switch(incomingMessage.type) {
      case 'postMessage':
        outgoingMessage.type = 'postMessage';
        outgoingMessage.id = uuid;
        outgoingMessage.username = incomingMessage.username;
        outgoingMessage.content = incomingMessage.content;
        break;
      case 'postUsername':
        outgoingMessage.type = 'postUsername';
        outgoingMessage.id = uuid;
        outgoingMessage.username = incomingMessage.username;
        break;
    }

    let outgoingMessageJson = JSON.stringify(outgoingMessage);

    // Send message to all clients
    wss.broadcast(outgoingMessageJson);
  });


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
