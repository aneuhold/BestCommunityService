import {
  WithStyles,
  createStyles,
  AppBar,
  Toolbar,
  Button,
  withStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import logo from '../../../assets/logoMonochromeWhite.svg';

function styles(theme: Theme) {
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
    title: {
      marginRight: theme.spacing(2),
    },
    logo: {
      width: 150,
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
      <AppBar position="static" title="Best Community Service">
        <Toolbar>
          <div className={classes.primaryMenuItems}>
            <Button href="/">
              <img
                src={logo}
                className={classes.logo}
                alt="Best Community Service Logo"
              />
            </Button>
            <Button color="inherit" href="/services">
              Services
            </Button>
            <Button color="inherit" href="/volunteer">
              Volunteer
            </Button>
            <Button color="inherit" href="/calendar">
              Calendar
            </Button>
            <Button color="inherit" href="/about">
              About
            </Button>
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
