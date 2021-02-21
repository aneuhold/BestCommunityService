import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { equipment } from '../data/equipment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
    },
    cardGrid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      textAlign: 'center',
      justifyContent: 'space-around',
      padding: theme.spacing(2),
    },
    toolCard: {
      minWidth: '300px',
      margin: theme.spacing(2),
    },
    media: {
      minHeight: 140,
    },
  })
);

export default function EquipmentFilter(): JSX.Element {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Filter" />
      <div className={classes.cardGrid}>
        {equipment.map(equipmentItem => (
          <Card key={equipmentItem.assetId} className={classes.toolCard}>
            <CardMedia
              className={classes.media}
              image={equipmentItem.image}
              title={equipmentItem.displayName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {equipmentItem.displayName}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to Filter</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Card>
  );
}
