import FeedVerticalSlider from '@/components/FeedVerticalSlider';
import { Alert, Fab, Grid, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import FeedPostDialog from '@/components/FeedPostDialog';
import { useQuery } from '@tanstack/react-query';
import { getAllFeeds } from '@/apis/feed';

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen((pre) => !pre);
  };
  const { data: feedData } = useQuery(['feeds'], getAllFeeds);
  return (
    <>
      <FeedVerticalSlider feedData={feedData?.data} />
      <Fab color="info" sx={{ position: 'absolute', right: 40, bottom: 40 }} size="medium" onClick={toggleDialog}>
        <EditIcon />
      </Fab>
      <FeedPostDialog open={open} toggleDialog={toggleDialog} />
    </>
  );
};

export default MainPage;
