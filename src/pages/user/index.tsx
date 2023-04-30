import FeedVerticalSlider from '@/components/FeedVerticalSlider';
import UserProfile from '@/components/UserProfile';
import { Backdrop, Dialog } from '@mui/material';
import React, { useState } from 'react';

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const toggleDialog = () => {
    setOpen((pre) => !pre);
  };
  return (
    <>
      <UserProfile toggleDialog={toggleDialog} />
      <Backdrop sx={{ color: '#fff', zIndex: 100 }} open={open} onClick={toggleDialog}>
        <FeedVerticalSlider />
      </Backdrop>
    </>
  );
};

// 기상 미션, 운동, 코딩테스트 몇번 성공 연속몇일
export default UserPage;
