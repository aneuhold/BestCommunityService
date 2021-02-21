import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
});

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

export default function About(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        About Us
      </Typography>
      <Typography variant="body1" component="p" className={classes.bodyText}>
        {lorem.generateParagraphs(1)}
      </Typography>
      <br />
      <Typography variant="body1" component="p" className={classes.bodyText}>
        {lorem.generateParagraphs(1)}
      </Typography>
    </div>
  );
}
