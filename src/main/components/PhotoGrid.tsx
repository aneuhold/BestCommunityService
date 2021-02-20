import {
  createStyles,
  ImageList,
  ImageListItem,
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
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      maxHeight: '70vh',
    },
  });
}

export type PhotoGridProps = WithStyles<typeof styles>;

const PhotoGrid = (props: PhotoGridProps): JSX.Element => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ImageList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <ImageListItem key={tile.title}>
            <img src={tile.img} alt={tile.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default withStyles(styles, { withTheme: false })(PhotoGrid);
