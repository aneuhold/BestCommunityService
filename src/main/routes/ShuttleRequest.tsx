import {
  Card,
  createStyles,
  Theme,
  Typography,
  TextField,
  makeStyles,
  Button,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default,
    },
    signUpForm: {
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  })
);

export default function ShuttleRequest(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        Shuttle Service
      </Typography>
      <Typography variant="h3" component="p" color="primary">
        555-555-5555
      </Typography>
      <Typography>
        Either call the number above or fill out the form below to get a shuttle
        to your location.
      </Typography>
      <Card className={classes.signUpForm}>
        <div className={classes.flexRow}>
          <TextField label="First Name" required variant="filled" />
          <TextField label="Last Name" required variant="filled" />
        </div>
        <TextField label="Phone Number" required variant="filled" />
        <div className={classes.flexRow}>
          <TextField label="Address line 1" required variant="filled" />
          <TextField label="Address line 2" variant="filled" />
          <TextField label="City" required variant="filled" />
          <TextField label="Zip / Postal Code" required variant="filled" />
        </div>
        <Button variant="contained">Submit</Button>
      </Card>
    </div>
  );
}
