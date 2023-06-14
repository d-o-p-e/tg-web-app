import { Avatar, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import React, { FC, useRef } from 'react';
import red from '@mui/material/colors/red';
import { Comment as CommentType } from '@/typings/comment';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteComment } from '@/apis/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface CommentProps {
  comment: CommentType;
  feedId: number;
  toggleSnackBar: () => void;
}

// 댓글 컴포넌트
const Comment: FC<CommentProps> = ({ comment, feedId, toggleSnackBar }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['feed', feedId, 'comments']);
      toggleSnackBar();
    },
  });
  return (
    <section style={{ marginTop: '20px' }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} src={comment.profileImageUrl}></Avatar>}
        title={comment.nickName}
        subheader={dayjs(comment.createdAt).format('YYYY-MM-DD')}
        onClick={() => navigate(`/user/${comment.userId}`)}
        action={
          <IconButton
            aria-label="settings"
            onClick={(e) => {
              e.stopPropagation();
              mutate({ commentId: comment.commentId, postId: feedId });
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
        sx={{ cursor: 'pointer' }}
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
