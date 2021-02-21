import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import React from 'react';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { exampleCalendarEvents } from '../data/events';

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

const currentDate = '2018-07-17';

export default function About(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        Calendar
      </Typography>
      <Scheduler data={exampleCalendarEvents}>
        <ViewState currentDate={currentDate} />
        <MonthView />
        <Appointments />
      </Scheduler>
    </div>
  );
}
