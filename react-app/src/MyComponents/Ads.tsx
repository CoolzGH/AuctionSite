import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 220,
    width: "4%",
    height: "50%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Реклама
        </Typography>
        <Typography variant="h5" component="h2">
          Рекламный товар
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          описание 
        </Typography>
        <Typography variant="body2" component="p">
          некоторый текст
          <br />
          {'"продолжение некоторого текста"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Читать дальше...</Button>
      </CardActions>
    </Card>
  );
}
