import { Box, Dialog, TextField, Button } from '@mui/material';
import React, { FC } from 'react';
import Comment from './Comment';

interface CommentDialogProps {
  toggleDialog: () => void;
  open: boolean;
}

const CommentDialog: FC<CommentDialogProps> = ({ toggleDialog, open }) => {
  return (
    <Dialog open={open} onClose={toggleDialog}>
      <Box sx={{ padding: '30px', minHeight: '500px', my: '10px' }}>
        <TextField label="댓글을 적어주세요" multiline rows={2} fullWidth />
        <Button variant="contained" sx={{ mt: '5px' }}>
          작성하기
        </Button>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Box>
    </Dialog>
  );
};

export default CommentDialog;
