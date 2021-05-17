import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 285,
  },
  media: {
    height: 190,
  },
});

var Name = "Имя пользователя";

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/image/avatar.png"
          title="Avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
