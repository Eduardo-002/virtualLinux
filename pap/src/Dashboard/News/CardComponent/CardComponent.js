import React from 'react';

import {Card,CardHeader,CardContent,CardMedia,Typography,CardActions,IconButton, Grid,Divider} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const CardComponent = (props) => {
  const {classes,newData} = props;

  return (
    <Card className={classes.card}>
      <CardHeader 
        //action={}
        title={newData.Title}
        subheader={newData.Date}
      />
      <Divider/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <CardMedia
            className={classes.media}
            image={newData.Images[0]}
            title='Image'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardContent>
            <Typography variant='body2' component='p'>
              {newData.Description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CardComponent;