import {
  Card,
  CardHeader,
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Theme,
  Tooltip,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';
import { format } from 'date-fns';
import AddIcon from '@material-ui/icons/Add';
import { ScheduledEvent } from '../../data/events';

function styles(theme: Theme) {
  return createStyles({
    root: {
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      textAlign: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    filledlistingEntry: {
      width: '100%',
      backgroundColor: theme.palette.error.light,
      color: theme.palette.error.contrastText,
    },
    emptylistingEntry: {
      width: '100%',
      backgroundColor: theme.palette.success.light,
      color: theme.palette.success.contrastText,
    },
  });
}

export interface CalendarListingProps extends WithStyles<typeof styles> {
  scheduledEvents: ScheduledEvent[];
  listingDate?: Date;
}

const CalendarListing = (props: CalendarListingProps): JSX.Element => {
  const { classes, listingDate = new Date('2022'), scheduledEvents } = props;

  return (
    <Card className={classes.root}>
      <CardHeader title={format(listingDate, 'MMMM do, yyyy')} />
      <List>
        <ListItem className={`${classes.emptylistingEntry}`}>
          <ListItemText primary="7:00 am - 12:00 noon" />
          <ListItemSecondaryAction>
            <Tooltip title="Reserve space at this time">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
        {scheduledEvents.map(scheduledEvent => (
          <ListItem
            key={scheduledEvent.name}
            className={`${classes.filledlistingEntry}`}
          >
            <ListItemText
              primary={`${format(
                scheduledEvent.dateRange[0],
                'h:mm bbb'
              )} - ${format(scheduledEvent.dateRange[1], 'h:mm bbb')}`}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(CalendarListing);
