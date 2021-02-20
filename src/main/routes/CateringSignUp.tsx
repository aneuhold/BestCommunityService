import {
  Card,
  createStyles,
  Theme,
  Typography,
  TextField,
  makeStyles,
  Button,
} from '@material-ui/core';
import { DatePicker } from '@material-ui/lab';
import React, { useState } from 'react';

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

export default function CateringSignUp(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        Sign Up for Catering
      </Typography>
      <Card className={classes.signUpForm}>
        <TextField label="Event Type" required variant="filled" />
        <DatePicker
          label="Date of Event"
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={params => <TextField {...params} variant="filled" />}
        />
        <TextField label="Company" variant="filled" />
        <div className={classes.flexRow}>
          <TextField label="First Name" required variant="filled" />
          <TextField label="Last Name" required variant="filled" />
        </div>
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
