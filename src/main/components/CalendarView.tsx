import {
  Box,
  Card,
  createStyles,
  TextField,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { DateRange, StaticDateRangePicker } from '@material-ui/lab';
import React, { useState } from 'react';

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

export type CalendarViewProps = WithStyles<typeof styles>;

const CalendarView = (props: CalendarViewProps): JSX.Element => {
  const { classes } = props;

  const [value, setValue] = useState<DateRange<Date | null>>([null, null]);

  return (
    <Card className={classes.root}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} variant="standard" />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} variant="standard" />
          </>
        )}
      />
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(CalendarView);
