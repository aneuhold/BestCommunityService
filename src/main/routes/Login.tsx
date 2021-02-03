import {
  createStyles,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';

function styles(theme: Theme) {
  return createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      justifyContent: 'space-around',
      backgroundColor: theme.palette.background.paper,
    },
    callToAction: {
      display: 'inline-block',
    },
  });
}

export type LoginProps = WithStyles<typeof styles>;

const Login = (props: LoginProps): JSX.Element => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.callToAction} component="h1">
        Placeholder for login page
      </Typography>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Login);
