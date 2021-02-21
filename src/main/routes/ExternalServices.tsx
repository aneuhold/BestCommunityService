import {
  Card,
  createStyles,
  Theme,
  Typography,
  TextField,
  makeStyles,
  Button,
  CardContent,
} from '@material-ui/core';
import { LoremIpsum } from 'lorem-ipsum';
import React from 'react';

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
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'stretch',
      backgroundColor: theme.palette.background.default,
    },
    articleCard: {
      width: '90%',
      margin: 'auto',
      textAlign: 'left',
    },
    article: {
      margin: `${theme.spacing(2)} 0`,
    },
    signUpForm: {
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  })
);

export default function ExternalServices(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        External Services
      </Typography>
      <Typography variant="body1" component="p">
        See below for some of the different external services we can provide you
        and your loved ones
      </Typography>
      {[1, 2, 3].map(val => (
        <article className={classes.article}>
          <Card className={classes.articleCard}>
            <CardContent>
              <Typography variant="h4" component="h2">
                {`External Service ${val}`}
              </Typography>
              <Typography variant="body1" component="p">
                {lorem.generateParagraphs(1)}
              </Typography>
            </CardContent>
          </Card>
        </article>
      ))}

      <Typography variant="h3" component="p" color="primary">
        555-555-5555
      </Typography>
      <Typography>
        Either call the number above or fill out the form below to sign up for
        one of our external services
      </Typography>
      <Card className={classes.signUpForm}>
        <div className={classes.flexRow}>
          <TextField label="First Name" required variant="filled" />
          <TextField label="Last Name" required variant="filled" />
        </div>
        <TextField label="Phone Number" required variant="filled" />
        <div className={classes.flexRow}>
          <TextField label="Address line 1" required variant="filled" />
          <TextField label="Address line 2" variant="filled" />
          <TextField label="City" required variant="filled" />
          <TextField label="Zip / Postal Code" required variant="filled" />
        </div>
        <Button variant="contained">Submit</Button>
      </Card>
    </div>
  );
}
