import { Avatar, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import React, { FC, useRef } from 'react';
import red from '@mui/material/colors/red';
import { Comment as CommentType } from '@/typings/comment';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteComment } from '@/apis/comment';
import { useMutation } from '@tanstack/react-query';

interface CommentProps {
  comment: CommentType;
  feedId: number;
}

const Comment: FC<CommentProps> = ({ comment, feedId }) => {
  const { mutate } = useMutation(deleteComment);
  return (
    <section style={{ marginTop: '20px' }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{comment.nickName[0]}</Avatar>}
        title={comment.nickName}
        subheader={dayjs(comment.createdAt).format('YYYY-MM-DD')}
        action={
          <IconButton aria-label="settings" onClick={() => mutate({ commentId: comment.commentId, postId: feedId })}>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment.content}
        </Typography>
      </CardContent>
    </section>
  );
};

export default Comment;
