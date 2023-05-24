import { Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import GiveAwayItem from '@/components/GiveAwayItem';

const CampaignPage = () => {
  return (
    <>
      <div>
        <Typography variant="h5" component="h6">
          경품 추천
        </Typography>
        <Divider />
      </div>
      <Swiper
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
      </Swiper>
      <Button variant="contained" size="large" sx={{ display: 'block', margin: 'auto' }}>
        응모하기
      </Button>
      <Typography variant="body1" component="div" sx={{ display: 'block', margin: 'auto' }}>
        3회 응모할 수 있습니다.
      </Typography>
    </>
  );
};

export default CampaignPage;
