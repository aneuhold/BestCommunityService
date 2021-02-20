import {
  Card,
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';
import { endOfDay, isEqual } from 'date-fns';
import Debug from 'debug';
import { ScheduledEvent, scheduledEvents } from '../../data/events';
import CalendarListing from './CalendarListing';

const debug = Debug('CalendarListings');
debug.enabled = true;

function styles(theme: Theme) {
  return createStyles({
    root: {
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
  });
}

const scheduledEventsByDay: Array<Array<ScheduledEvent>> = [];
let currentEventArr: Array<ScheduledEvent> = [];
let currentDay = endOfDay(scheduledEvents[0].dateRange[0]);
for (let eventIndex = 0; eventIndex < scheduledEvents.length; eventIndex += 1) {
  const currentEvent = scheduledEvents[eventIndex];
  if (isEqual(endOfDay(currentEvent.dateRange[0]), currentDay)) {
    currentEventArr.push(currentEvent);
  } else {
    scheduledEventsByDay.push(currentEventArr);
    currentEventArr = [currentEvent];
    currentDay = endOfDay(currentEvent.dateRange[0]);
  }
}
scheduledEventsByDay.push(currentEventArr);

export type CalendarListingsProps = WithStyles<typeof styles>;

const CalendarListings = (props: CalendarListingsProps): JSX.Element => {
  const { classes } = props;

  return (
    <Card className={classes.root}>
      {scheduledEventsByDay.map(scheduledEventsForDay => (
        <CalendarListing
          key={scheduledEventsForDay[0].name}
          scheduledEvents={scheduledEventsForDay}
          listingDate={scheduledEventsForDay[0].dateRange[0]}
        />
      ))}
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(CalendarListings);
