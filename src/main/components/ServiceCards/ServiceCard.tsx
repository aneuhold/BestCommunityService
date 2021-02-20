import {
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';
import { Service } from '../../data/services';

function styles(theme: Theme) {
  return createStyles({
    root: {
      width: 275,
      margin: theme.spacing(1),
    },
  });
}

export interface ServiceCardProps extends WithStyles<typeof styles> {
  service: Service;
}

const ServiceCard = (props: ServiceCardProps): JSX.Element => {
  const { classes, service } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {service.displayName}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {service.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={service.learnMoreLink}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(ServiceCard);
