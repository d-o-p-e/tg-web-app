import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper';
import Feed from '../FeedCard';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
          <motion.div
            animate={{ y: -30 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              type: 'spring',
              damping: 10,
              restDelta: 0.0001,
            }}
            style={{ position: 'absolute', bottom: 0, left: '50%' }}
          >
            <KeyboardArrowDownIcon />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Feed />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Feed />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
