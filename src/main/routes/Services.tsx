import {
  createStyles,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

function styles(theme: Theme) {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
    },
    services: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    pageTitle: {
      display: 'block',
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
      <div className={classes.services}>
        {services.map(service => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Services);
