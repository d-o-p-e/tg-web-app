import { getFeedsByUserId } from '@/apis/feed';
import FeedVerticalSlider from '@/components/FeedVerticalSlider';
import UserProfile from '@/components/UserProfile';
import { Backdrop, Dialog } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [clickIndex, setClickIndex] = useState(0);
  const toggleDialog = () => {
    setOpen((pre) => !pre);
  };
  const { data: feedData } = useQuery(['user', 'feeds', Number(params.id)], () => getFeedsByUserId(Number(params.id)));
  return (
    <>
      <UserProfile toggleDialog={toggleDialog} feedData={feedData} setClickIndex={setClickIndex} />
      <Backdrop sx={{ color: '#fff', zIndex: 100 }} open={open} onClick={toggleDialog}>
        <FeedVerticalSlider feedData={feedData?.data} clickIndex={clickIndex} />
      </Backdrop>
    </>
  );
};

// 기상 미션, 운동, 코딩테스트 몇번 성공 연속몇일
export default UserPage;
