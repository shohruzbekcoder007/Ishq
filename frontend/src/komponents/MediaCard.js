import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    cursor: "inherit",
    margin: 10
  },
  media: {
    height: 340,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  // {console.log(props.url)}
  const deleteImage = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: `${props.id}` })
      };
      fetch(`http://localhost:8080/files/del/${props.id}`, requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
      }

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia
          className={classes.media}
        //   image="/static/images/cards/contemplative-reptile.jpg"
        
          image={props.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            URL
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            http://localhost:8080/image/{props.filename}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="small" 
            color="primary"
            onClick = {deleteImage}
          >
            Rasmni o'chirish
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
