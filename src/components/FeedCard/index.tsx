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
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import { Alert, Box, Button, Dialog, Grid, Snackbar, TextField } from '@mui/material';
import { FC, useState } from 'react';
import CommentDialog from '../CommentDialog';
import { Post } from '@/typings/post';
import dayjs from 'dayjs';
import { IMAGE_URL_PREFIX } from '@/constants/url';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFeed, deleteFeedLike, postFeedLike } from '@/apis/feed';
import { useNavigate } from 'react-router-dom';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface FeedProps {
  feed: Post;
  toggleSnackBar: () => void;
}

export default function Feed({ feed, toggleSnackBar }: FeedProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const toggleDialog = () => {
    setOpen((pre) => !pre);
  };
  const { mutate: feedLikeMutate } = useMutation(postFeedLike, {
    onSuccess: () => {
      queryClient.invalidateQueries(['feeds']);
      queryClient.invalidateQueries(['user', 'feeds']);
    },
  });
  const { mutate: feedUnLikeMutate } = useMutation(deleteFeedLike, {
    onSuccess: () => {
      queryClient.invalidateQueries(['feeds']);
      queryClient.invalidateQueries(['user', 'feeds']);
    },
  });
  const { mutate: feedDeleteMutate } = useMutation(deleteFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries(['feeds']);
      queryClient.invalidateQueries(['user', 'feeds']);
      toggleSnackBar();
    },
  });

  return (
    <>
      <Card sx={{ display: 'flex', alignItems: 'center', padding: 0 }} onClick={(e) => e.stopPropagation()}>
        <Grid container sx={{ height: '100%', position: 'relative' }}>
          <Grid item xs={7}>
            <img
              src={IMAGE_URL_PREFIX + feed.imageUrl}
              alt="Paella dish"
              style={{ height: '100%', width: '100%', objectFit: 'cover', aspectRatio: 1 / 1 }}
            />
          </Grid>
          <Grid item xs={5}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={feed.userProfileImageUrl}></Avatar>}
              title={feed.userNickname}
              subheader={dayjs(feed.createdAt).format('YYYY-MM-DD')}
              onClick={() => navigate(`/user/${feed.userId}`)}
              sx={{ cursor: 'pointer' }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {feed.content}
              </Typography>
              <CardActions sx={{ bottom: 0, right: 0, position: 'absolute' }}>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    feed.isLiked ? feedUnLikeMutate(feed.postId) : feedLikeMutate(feed.postId);
                  }}
                >
                  <FavoriteIcon color={feed.isLiked ? 'error' : 'inherit'} />
                </IconButton>
                <IconButton aria-label="share" onClick={toggleDialog}>
                  <CommentIcon />
                </IconButton>
                <IconButton aria-label="settings" onClick={() => feedDeleteMutate(feed.postId)}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </CardContent>
            <CommentDialog open={open} toggleDialog={toggleDialog} feedId={feed.postId} />
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
