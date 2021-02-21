import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ClassRow from './ClassRow';
import { courses } from '../../data/courses';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: 'center',
    },
  })
);

export default function ClassTable(): JSX.Element {
  const classes = useStyles();
  return (
    <TableContainer className={classes.root}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Reserved Seats</TableCell>
            <TableCell align="right">Instructor</TableCell>
            <TableCell align="right">Short Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map(course => (
            <ClassRow key={course.name} course={course} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
