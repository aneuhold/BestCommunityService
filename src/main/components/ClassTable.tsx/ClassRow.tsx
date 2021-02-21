import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { format } from 'date-fns';
import {
  TableCell,
  TableRow,
  Typography,
  IconButton,
  Collapse,
  Box,
  Button,
} from '@material-ui/core';
import { Course } from '../../data/courses';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: 'center',
    },
  })
);

export interface ClassRowProps {
  course: Course;
}

export default function ClassRow(props: ClassRowProps): JSX.Element {
  const { course } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {course.name}
        </TableCell>
        <TableCell align="right">{format(course.date, 'PPpp')}</TableCell>
        <TableCell align="right">{`${course.filledSeats} / ${course.maximumSeats}`}</TableCell>
        <TableCell align="right">{course.instructor}</TableCell>
        <TableCell align="right">
          <Button variant="contained" color="primary" endIcon={<AddIcon />}>
            Sign Up
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Course Description
              </Typography>
              <Typography variant="body1" gutterBottom component="div">
                {course.longDescription}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
