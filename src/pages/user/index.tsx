import { getFeedsByUserId } from '@/apis/feed';
import FeedVerticalSlider from '@/components/FeedVerticalSlider';
import UserProfile from '@/components/UserProfile';
import { Backdrop, Dialog } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// 유저의 프로필을 보여주는 페이지
const UserPage = () => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [clickIndex, setClickIndex] = useState(0);
  const toggleDialog = () => {
    setOpen((pre) => !pre);
  };
  const { data: feedData } = useQuery(['user', 'feeds', Number(params.id)], () => getFeedsByUserId(Number(params.id)));
  // 해당 유저의 게시글을 가져옴
  return (
    <>
      <UserProfile toggleDialog={toggleDialog} feedData={feedData} setClickIndex={setClickIndex} />
      <Backdrop sx={{ color: '#fff', zIndex: 100 }} open={open} onClick={toggleDialog}>
        <FeedVerticalSlider feedData={feedData?.data} clickIndex={clickIndex} />
      </Backdrop>
    </>
  );
};

export default UserPage;
