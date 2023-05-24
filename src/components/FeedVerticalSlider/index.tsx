import React, { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper';
import Feed from '../FeedCard';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AxiosResponse } from 'axios';
import { Post } from '@/typings/post';

interface FeedVerticalSliderProps {
  feedData: Post[] | undefined;
}

const FeedVerticalSlider: FC<FeedVerticalSliderProps> = ({ feedData }) => {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        style={{ width: '80%', height: '100%' }}
      >
        {feedData?.map((feed) => {
          return (
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Feed feed={feed} />
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
          );
        })}
      </Swiper>
    </>
  );
};
export default FeedVerticalSlider;
