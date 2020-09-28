import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  root: {
    textAlign: 'center',
    padding: "0 80 0 0",
  }
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
        <IconButton aria-label="Home" onClick={event =>  window.location.href='/Home'}><HomeIcon/></IconButton>
        <IconButton aria-label="Chat" onClick={event =>  window.location.href='/Chat'}><ChatIcon/></IconButton>
    </div>
  );
}

