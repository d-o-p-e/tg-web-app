import { Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import GiveAwayItem from '@/components/GiveAwayItem';
import { useMutation } from '@tanstack/react-query';
import { postCampaign } from '@/apis/campaign';

const CampaignPage = () => {
  const { mutate } = useMutation(postCampaign);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Typography variant="h5" component="h5" sx={{ display: 'block', margin: 'auto' }}>
          두근 두근 무엇이 나올까요?
        </Typography>
        <Button variant="contained" size="large" sx={{ display: 'block', margin: 'auto' }} onClick={() => mutate(1)}>
          경품 추첨하기
        </Button>
      </div>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        initialSlide={2}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <GiveAwayItem />
        </SwiperSlide>
        <SwiperSlide>
          <GiveAwayItem />
        </SwiperSlide>
        <SwiperSlide>
          <GiveAwayItem />
        </SwiperSlide>
        <SwiperSlide>
          <GiveAwayItem />
        </SwiperSlide>
        <SwiperSlide>
          <GiveAwayItem />
        </SwiperSlide>
        <SwiperSlide>
          <GiveAwayItem />
        </SwiperSlide>
      </Swiper>*/}
    </>
  );
};

export default CampaignPage;
