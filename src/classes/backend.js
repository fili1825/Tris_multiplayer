
// Devi sistemare il file per gestire le risposte da parte del server a uno dei due giocatori (il client) 

const express = require('express')
const app = express()

// socket.io setup
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, { pingInterval: 2000, pingTimeout: 5000 })

const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
    
  });
  
  server.listen(3000, () => {
    console.log('listening on *:3000');
  });