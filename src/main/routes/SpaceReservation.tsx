import {
  createStyles,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';
import CalendarFilter from '../components/CalendarFilter';
import CalendarView from '../components/CalendarView';
import CalendarListings from '../components/CalendarListings';

function styles(theme: Theme) {
  return createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      background: theme.palette.background.default,
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
      <CalendarFilter />
      <CalendarView />
      <CalendarListings />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(SpaceReservation);
