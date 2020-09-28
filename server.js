const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)
const path = require('path');

const Chat = require('./models/chat')

const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/paws_up", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

//socket.io connection
io.on('connection', (socket) => {
  Chat
    .find()
    .sort({createdAt: -1})
    .exec((err, messages) =>{
      if (err) return console.error(err);

      socket.emit('inital', messages);
    });

  socket.on('message', (msg) => {
    const message = new Chat({
      name: msg.name,
      message: msg.message
    });

    message.save((err) => {
      if (err) return console.error(err);
    });

    socket.broadcast.emit('send', msg);

    });
  });

// Start the API server
http.listen(PORT, function() {
  console.log(`🌎  ==>Server now listening on PORT ${PORT}!`);
});