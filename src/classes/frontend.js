
// Devi sistemare il file per gestire le chiamate da parte di uno dei due giocatori (il client) al server


import { io } from "socket.io-client";
const app = express();

const socket = io("ws://localhost:3000");


socket.on('connect', () => {
    console.log('Connesso al server Socket.io');
  });

// send a message to the server
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

// receive a message from the server
socket.on("hello from server", (...args) => {
  // ...
});