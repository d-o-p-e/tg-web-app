import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Box, Button, Dialog, Grid, TextField } from '@mui/material';
import { FC, useState } from 'react';
import CommentDialog from '../CommentDialog';
import { Post } from '@/typings/post';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface FeedProps {
  feed: Post;
}

export default function Feed({ feed }: FeedProps) {
  const [open, setOpen] = useState(false);
  const toggleDialog = () => {
    setOpen((pre) => !pre);
  };
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', padding: 0 }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={7}>
          <img src={feed.imageUrl} alt="Paella dish" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={5}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {feed.userNickname[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader={feed.createdAt}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {feed.content}
            </Typography>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share" onClick={toggleDialog}>
                <CommentIcon />
              </IconButton>
            </CardActions>
          </CardContent>
          <CommentDialog open={open} toggleDialog={toggleDialog} />
        </Grid>
      </Grid>
    </Card>
  );
}
