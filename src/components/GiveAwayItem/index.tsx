import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const GiveAwayItem = () => {
  return (
    <Card sx={{ margin: '10px', padding: '20px' }}>
      <CardMedia component="img" src="/src/assets/giveaway1.jpg" title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          영양제
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GiveAwayItem;
