import {
  createStyles,
  GridList,
  GridListTile,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import React from 'react';
import tileData from '../data/photoGridTiles';

function styles(theme: Theme) {
  return createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
  });
}

export type PhotoGridProps = WithStyles<typeof styles>;

const PhotoGrid = (props: PhotoGridProps): JSX.Element => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.title}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(styles, { withTheme: false })(PhotoGrid);
