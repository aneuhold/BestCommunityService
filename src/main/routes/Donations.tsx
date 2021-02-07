import {
  createStyles,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';
import DonationForm from '../components/DonationForm';

function styles(theme: Theme) {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
    },
    callToAction: {
      display: 'inline-block',
    },
  });
}

export type DonationsProps = WithStyles<typeof styles>;

const Donations = (props: DonationsProps): JSX.Element => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.callToAction} component="h1">
        Making a Donation to &quot;Best Community Service&quot;
      </Typography>
      <DonationForm />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Donations);
