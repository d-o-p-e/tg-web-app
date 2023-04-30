import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper';
import Feed from '../FeedCard';

export default function FeedVerticalSlider() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        style={{ width: '80%', height: '100%', marginLeft: '20%' }}
      >
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <Feed />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
