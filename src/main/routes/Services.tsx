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
    pageTitle: {
      display: 'inline-block',
    },
  });
}

export type ServicesProps = WithStyles<typeof styles>;

const Services = (props: ServicesProps): JSX.Element => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.pageTitle} component="h1">
        Services
      </Typography>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Services);
