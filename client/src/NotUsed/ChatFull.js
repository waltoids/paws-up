import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      marginTop:"20px",
      marginBottom:"20px",
      marginLeft: "5px",
      marginRight: "5px",
      height: '275px',

    padding: theme.spacing(20),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="App">
    <Paper>
      <Grid>
      <div id = 'chat-container'>
        <div id="search-container">
            <input type= 'text' placeholder="Search" />
        </div>

          <div id="conversation-list">
            <div className="conversation">
                <img src={require("../pages/chatImages/Josh.jpg")} alt="empty"/>
                <div className="title-text">
                    Josh Silverman
                </div>
                <div className="created-date">
                    Sept 20
                </div>
                <div className="conversation-message">
                    Time to get going.
                </div>
            </div>
            <div className="conversation">
                <img src={require("../pages/chatImages/Madeline.jpg")} alt="empty"/>
                <div className="title-text">
                    Madeline Cummings
                </div>
                <div className="created-date">
                    Sept 10
                </div>
                <div className="conversation-message">
                    That restaurant was amazing, need to go back.
                </div>
            </div>
            <div className="conversation">
                <img src={require("../pages/chatImages/Rob.jpg")} alt="empty"/>
                <div className="title-text">
                    Rob Taylor
                </div>
                <div className="created-date">
                    Sept 3
                </div>
                <div className="conversation-message">
                    Have to tell you about my trip!
                </div>
            </div>
            <div className="conversation">
                <img src={require("../pages/chatImages/Taira.jpg")} alt="empty"/>
                <div className="title-text">
                    Taira Schneider
                </div>
                <div className="created-date">
                    Aug 31
                </div>
                <div className="conversation-message">
                    What happen last night???
                </div>
            </div>
            <div className="conversation">
                <img src={require("../pages/chatImages/Tim.jpg")} alt="empty"/>
                <div className="title-text">
                    Tim Albertson
                </div>
                <div className="created-date">
                    Aug 31
                </div>
                <div className="conversation-message">
                    Let me know when you are in town
                </div>
            </div>
            <div className="conversation">
                <img src={require("../pages/chatImages/Marsh.jpg")} alt="empty"/>
                <div className="title-text">
                    Marsh Pointer 
                </div>
                <div className="created-date">
                    Aug 25
                </div>
                <div className="conversation-message">
                    Time to turn on the heat.
                </div>
            </div>
            <div className="conversation">
                <img src={require("../pages/chatImages/Tatiana.jpg")} alt="empty"/>
                <div className="title-text">
                    Tatiana Roberts
                </div>
                <div className="created-date">
                    Aug 22
                </div>
                <div className="conversation-message">
                    The package did arrive, but broken
                </div>
            </div>
            <div className="conversation">
                <img src={require("../pages/chatImages/Luis.jpg")} alt="empty"/>
                <div className="title-text">
                    Luis Cenna
                </div>
                <div className="created-date">
                    Aug 15
                </div>
                <div className="conversation-message">
                    Still looking to hangout.
                </div>
            </div>
            <div className="conversation">
                <img src={require("../pages/chatImages/Marsh.jpg")} alt="empty"/>
                <div className="title-text">
                Marsh Pointer
                </div>
                <div className="created-date">
                    Jul 30
                </div>
                <div className="conversation-message">
                    Let me know when you are available.
                </div>
            </div>
          </div>

        <div id="new-message-container">
            <a href="/">+</a>
        </div>

        <div id="chat-title">
            <span>Mayte Mallorca</span>
            <img src={require('../pages/chatImages/trash-alt-solid.svg')} alt='delete'/>
        </div>

          <div id="chat-message-list">
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">How's the new puppy doing?</div>
                    <div className="message-time">Sept 25</div>
                </div>   
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../pages/chatImages/Mayte.jpg")} alt='Mayte'/> 
                    <div className="message-text">He's good, learning his new surroundings.</div>
                    <div className="message-time">Sept 25</div>
                </div>   
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">Let me know if you need me to puppy-sit.</div>
                    <div className="message-time">Sept 25</div>
                </div>   
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../pages/chatImages/Mayte.jpg")} alt='Mayte'/> 
                    <div className="message-text">I will take you up on that soon.</div>
                    <div className="message-time">Sept 25</div>
                </div>   
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">I will take him to the park and introduce him to the new neighbors.</div>
                    <div className="message-time">Sept 25</div>
                </div>   
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../pages/chatImages/Mayte.jpg")} alt='Mayte'/> 
                    <div className="message-text">That would be great, that way he learns to play nice at an early age.</div>
                    <div className="message-time">Sept 25</div>
                </div>   
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">Yes.</div>
                    <div className="message-time">Sept 25</div>
                </div>   
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../pages/chatImages/Mayte.jpg")} alt='Mayte'/> 
                    <div className="message-text">Cool, will be in touch.</div>
                    <div className="message-time">Sept 25</div>
                </div>   
            </div>
          </div>

        <div id="chat-form">
            <img src={require("../pages/chatImages/paperclip-solid.svg")} alt="attachement"/>
            <input type="text" placeholder="type a message" />
        </div>

      </div>
      </Grid>
      </Paper>
    </div>
  );
}

