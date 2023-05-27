import { Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMutation } from '@tanstack/react-query';
import { postCampaign } from '@/apis/campaign';
import { ReactComponent as GiftIcon } from '@/assets/gift.svg';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper';

const CampaignPage = () => {
  const { mutate } = useMutation(postCampaign);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{ display: 'block', marginX: 'auto', marginBottom: '30px', fontWeight: 700 }}
        >
          두근 두근 무엇이 나올까요?
        </Typography>
        {/* <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0], scale: 1 }}
          transition={{
            times: [0, 0.25, 0.5, 0.75, 1],
            repeatDelay: 1.8,
            repeat: Infinity,
          }}
        >
          <GiftIcon width={400} height={400} />
        </motion.div> */}
        <Swiper
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          speed={4000}
          grabCursor={false}
          modules={[Autoplay]}
          style={{ width: '100%' }}
        >
          <SwiperSlide>
            <img src="/src/assets/giveaway1.jpg" style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/giveaway2.jpg" style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/giveaway3.jpg" style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/giveaway3.jpg" style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/giveaway1.jpg" style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/giveaway2.jpg" style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/giveaway3.jpg" style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/giveaway3.jpg" style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
        </Swiper>
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0], scale: 1 }}
          transition={{
            times: [0, 0.25, 0.5, 0.75, 1],
            repeatDelay: 1.8,
            repeat: Infinity,
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => mutate()}
            style={{ marginTop: '30px', fontWeight: 700 }}
          >
            경품 응모하기
          </Button>
        </motion.div>
        <span style={{ fontSize: '12px' }}>남은 마일리지: 1</span>
      </div>
    </>
  );
};

export default CampaignPage;
