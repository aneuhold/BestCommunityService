import {
  Button,
  createStyles,
  InputAdornment,
  TextField,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import NotImplementedDialog from './NotImplementedDialog';

function styles(theme: Theme) {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    item: {
      margin: '0 auto',
      marginTop: theme.spacing(2),
    },
  });
}

export type DonationFormProps = WithStyles<typeof styles>;

const DonationForm = (props: DonationFormProps): JSX.Element => {
  const { classes } = props;
  const [donationAmount, setDonationAmount] = useState('1');
  const [implementedDialogOpen, setImplementedDialogOpen] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDonationAmount(event.target.value);
  }

  return (
    <div className={classes.root}>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        label="Amount"
        value={donationAmount}
        onChange={handleChange}
        className={classes.item}
      />
      <Button
        variant="outlined"
        color="primary"
        className={classes.item}
        onClick={() => {
          setImplementedDialogOpen(true);
        }}
      >
        Make Donation
      </Button>
      <NotImplementedDialog
        open={implementedDialogOpen}
        setOpen={setImplementedDialogOpen}
      />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(DonationForm);
