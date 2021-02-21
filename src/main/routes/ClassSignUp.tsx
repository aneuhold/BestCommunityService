import { createStyles, Theme, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import ClassTable from '../components/ClassTable.tsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default,
    },
  })
);

export default function ClassSignUp(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        Sign Up for Classes
      </Typography>
      <ClassTable />
    </div>
  );
}
