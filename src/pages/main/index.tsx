import FeedVerticalSlider from '@/components/FeedVerticalSlider';
import { Fab, Grid } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import FeedPostDialog from '@/components/FeedPostDialog';

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const toggleDialog = () => {
    setOpen((pre) => !pre);
  };
  return (
    <>
      <FeedVerticalSlider />
      <Fab color="info" sx={{ position: 'absolute', right: 40, bottom: 40 }} size="medium" onClick={toggleDialog}>
        <EditIcon />
      </Fab>
      <FeedPostDialog open={open} toggleDialog={toggleDialog} />
    </>
  );
};

export default MainPage;
