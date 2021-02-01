import {
  WithStyles,
  createStyles,
  AppBar,
  Toolbar,
  Button,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import UnstyledLink from '../UnstyledLink';

function styles() {
  return createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
    primaryMenuItems: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
    },
  });
}

export interface TopMenuBarProps extends WithStyles<typeof styles> {
  loggedIn: boolean;
}

const TopMenuBar = (props: TopMenuBarProps): JSX.Element => {
  const { classes, loggedIn } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.primaryMenuItems}>
            <Typography variant="h6">
              <UnstyledLink to="/">BCS</UnstyledLink>
            </Typography>
          </div>
          <Button color="inherit" variant="outlined">
            {loggedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(TopMenuBar);
