import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        aria-label="icon label tabs example"
      >
    <BrowserRouter>
        <div>
          <Tab icon={<HomeIcon />} label="Home" component={Link} to="/Home"/>
          <Tab icon={<ChatIcon />} label="Chat" component={Link} to="/chat"/>
          <Tab icon={<AccountCircleIcon />} label="Account" component={Link} to="/account"/>
        </div>
    </BrowserRouter>
      </Tabs>
    </Paper>
  );
}


