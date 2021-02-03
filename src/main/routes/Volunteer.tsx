import {
  createStyles,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';

function styles(theme: Theme) {
  return createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      justifyContent: 'space-around',
      backgroundColor: theme.palette.background.paper,
    },
    callToAction: {
      display: 'inline-block',
    },
  });
}

export type VolunteerProps = WithStyles<typeof styles>;

const Volunteer = (props: VolunteerProps): JSX.Element => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.callToAction} component="h1">
        Sign up to be a volunteer!
      </Typography>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Volunteer);
