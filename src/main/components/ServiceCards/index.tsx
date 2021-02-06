import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import services from '../../data/services';
import ServiceCard from './ServiceCard';

function styles() {
  return createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
}

export type ServiceCardProps = WithStyles<typeof styles>;

const ServicesCards = (props: ServiceCardProps): JSX.Element => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {services.map(service => (
        <ServiceCard key={service.name} service={service} />
      ))}
    </div>
  );
};

export default withStyles(styles, { withTheme: false })(ServicesCards);
