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

export type SpaceReservationProps = WithStyles<typeof styles>;

const SpaceReservation = (props: SpaceReservationProps): JSX.Element => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        Reserve a Space
      </Typography>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(SpaceReservation);
