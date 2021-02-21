import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import React from 'react';
import CalendarListings from '../components/CalendarListings';
import CalendarView from '../components/CalendarView';
import EquipmentFilter from '../components/EquipmentFilter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
    },
    bodyText: {
      maxWidth: '700px',
    },
  })
);

export default function EquipmentReservation(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        Reserve Equipment
      </Typography>
      <EquipmentFilter />
      <CalendarView />
      <CalendarListings />
    </div>
  );
}
