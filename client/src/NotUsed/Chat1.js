import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>CHAT CONTENT GOES HERE</Paper>
        </Grid>
      </Grid>
    </div>
  );
}



