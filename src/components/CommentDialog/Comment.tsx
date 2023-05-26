import { Avatar, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import React, { FC, useRef } from 'react';
import red from '@mui/material/colors/red';
import { Comment as CommentType } from '@/typings/comment';
import dayjs from 'dayjs';

interface CommentProps {
  comment: CommentType;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <section style={{ marginTop: '20px' }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{comment.nickName[0]}</Avatar>}
        title={comment.nickName}
        subheader={dayjs(comment.createdAt).format('YYYY-MM-DD')}
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
