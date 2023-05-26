import { Box, Dialog, TextField, Button, Divider, Paper, InputBase, IconButton, Snackbar, Alert } from '@mui/material';
import React, { FC, useState } from 'react';
import Comment from './Comment';
import SendIcon from '@mui/icons-material/Send';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getComments, postComment } from '@/apis/comment';
interface CommentDialogProps {
  toggleDialog: () => void;
  open: boolean;
  feedId: number;
}

const CommentDialog: FC<CommentDialogProps> = ({ toggleDialog, open, feedId }) => {
  const queryClient = useQueryClient();
  const [content, setContent] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const toggleSnackBar = () => {
    setSnackBarOpen((pre) => !pre);
  };
  const { data } = useQuery(['feed', feedId, 'comments'], () => getComments(feedId));
  const { mutate } = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['feed', feedId, 'comments']);
    },
  });
  const comments = data?.data;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ postId: feedId, content });
    setContent('');
  };

  return (
    <>
      <Dialog open={open} onClose={toggleDialog}>
        <Box sx={{ padding: '30px', minHeight: '500px', my: '10px', width: '600px' }}>
          <form style={{ padding: '2px 4px', display: 'flex', alignItems: 'center' }} onSubmit={onSubmit}>
            <TextField
              multiline
              maxRows={2}
              fullWidth
              variant="standard"
              placeholder="댓글을 입력해 주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SendIcon />
            </IconButton>
          </form>
          {comments?.map((comment) => (
            <Comment comment={comment} feedId={feedId} toggleSnackBar={toggleSnackBar} />
          ))}
        </Box>
      </Dialog>
      <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={toggleSnackBar}>
        <Alert onClose={toggleSnackBar} sx={{ width: '100%' }}>
          삭제되었습니다.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CommentDialog;
