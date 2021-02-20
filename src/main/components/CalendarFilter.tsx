import {
  Card,
  CardHeader,
  createStyles,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import { EVENT_TYPE } from '../data/events';
import SpaceSize from '../data/spaces';

function styles(theme: Theme) {
  return createStyles({
    root: {
      margin: theme.spacing(2),
    },
    filterControls: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      textAlign: 'center',
      justifyContent: 'space-around',
      padding: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
    },
    item: {
      margin: '0 auto',
      marginTop: theme.spacing(2),
    },
  });
}

export type CalendarFilterProps = WithStyles<typeof styles>;

const eventTypeObjs = Object.values(EVENT_TYPE);

const CalendarFilter = (props: CalendarFilterProps): JSX.Element => {
  const { classes } = props;

  const [eventType, setEventType] = useState(eventTypeObjs[0].name);
  const [roomSize, setRoomSize] = useState('Small');

  function handleEventTypeChange(
    event: React.ChangeEvent<{ name?: string | undefined; value: string }>
  ) {
    setEventType(event.target.value);
  }

  function handleRoomSizeChange(
    event: React.ChangeEvent<{ name?: string | undefined; value: string }>
  ) {
    setRoomSize(event.target.value as SpaceSize);
  }

  return (
    <Card className={classes.root}>
      <CardHeader title="Filter" />
      <div className={classes.filterControls}>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="event-type-label">Event Type</InputLabel>
          <Select
            labelId="event-type-label"
            id="event-type"
            value={eventType}
            onChange={handleEventTypeChange}
          >
            {Object.values(EVENT_TYPE).map(eventInfo => (
              <MenuItem key={eventInfo.name} value={eventInfo.name}>
                {eventInfo.displayName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="room-size-label">Room Size</InputLabel>
          <Select
            labelId="room-size-label"
            id="room-size"
            value={roomSize}
            onChange={handleRoomSizeChange}
          >
            <MenuItem value="Small">Small</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Large">Large</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(CalendarFilter);
