import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';

export default function SearchAppBar() {

  return (
    <div className='root'>
      <AppBar style={{background: '#413FD4'}} position="static">
        <Toolbar>
          <IconButton className='Casa' style={{color:'white', paddingLeft:"20px"}} aria-label="Home" onClick={event =>  window.location.href='/Home'}><HomeIcon/></IconButton>
          <Typography className='title' style={{color:'white', paddingLeft:"60px", fontWeight:'bold'}} variant="h4" noWrap>
            Paws Up!
          </Typography>
          <IconButton className='Mensaje' style={{color:'white', paddingLeft:"80px"}} aria-label="Chat" onClick={event =>  window.location.href='/Chat'}><ChatIcon/></IconButton>
        </Toolbar> 
      </AppBar>
    </div>
  );
}
