import {
  Container,
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';
import logo from '../../assets/logoHero.svg';

function styles() {
  return createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      backgroundColor: '#30c47e',
    },
    heroImage: {
      height: '50vh',
    },
  });
}

export type HeroProps = WithStyles<typeof styles>;

const Hero = (props: HeroProps): JSX.Element => {
  const { classes } = props;
  return (
    <Container maxWidth={false} className={classes.root}>
      <img
        className={classes.heroImage}
        src={logo}
        alt="Best Community Service Hero"
      />
    </Container>
  );
};

export default withStyles(styles, { withTheme: false })(Hero);
