import React from 'react';
import config from '../config';
import io from 'socket.io-client';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import UserInput from '../UserInput';
import './Chat.css';
// import { StylesProvider } from '@material-ui/core';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: [],
      message: '',
      name: '',
    };
  }

  componentDidMount() {
    this.socket = io(config[process.env.NODE_ENV].endpoint);

    // Load the last 10 messages in the window.
    this.socket.on('inital', (msg) => {
      let msgReversed = msg.reverse();
      this.setState((state) => ({
        chat: [...state.chat, ...msgReversed],
      }), this.scrollToBottom);
    });

    // Update the chat if a new message is broadcasted.
    this.socket.on('send', (msg) => {
      this.setState((state) => ({
        chat: [...state.chat, msg],
      }), this.scrollToBottom);
    });
  }

  // Save the message the user is typing in the input field.
  handleMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }

  //
  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit(event) {
    // Prevent the form to reload the current page.
    event.preventDefault();

    // Send the new message to the server.
    this.socket.emit('message', {
      name: this.state.name,
      message: this.state.message,
    });

    this.setState((state) => {
      // Update the chat with the user's message and remove the current message.
      return {
        chat: [...state.chat, {
          name: state.name,
          message: state.message,
        }],
        message: '',
      };
    }, this.scrollToBottom);
  }

  // Always make sure the window is scrolled down to the last message.
  scrollToBottom() {
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }

  render() {
    return (
      <div className="App">
        <Paper id="chat" elevation={3}>
          {this.state.chat.map((el, index) => {
            return (
              <div key={index}>
                <Typography variant="subtitle1" className="name">
                  {el.name}
                </Typography>
                <Typography variant="h6" className="message">
                  {el.message}
                </Typography>
              </div>
            );
          })}
        </Paper>
        <UserInput
          message={this.state.message}
          handleContent={this.handleMessage.bind(this)}
          handleName={this.handleName.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          name={this.state.name}
        />
      </div>
      
    );
  }
};

export default Chat;
