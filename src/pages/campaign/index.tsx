import { Alert, Button, Card, CardContent, CardMedia, Divider, Grid, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getMileage, postCampaign } from '@/apis/campaign';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper';
import BlenderDialog from '@/components/BlenderDialog';

const giveaway1 = new URL('/src/assets/giveaway1.jpg', import.meta.url).href;
const giveaway2 = new URL('/src/assets/giveaway2.jpg', import.meta.url).href;
const giveaway3 = new URL('/src/assets/giveaway3.jpg', import.meta.url).href;

const CampaignPage = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const { mutate } = useMutation(postCampaign, {
    onSuccess: (data) => {
      setOpen(true);
      queryClient.setQueryData(['campaign', 'mileage'], data.data.amount);
    },
    onError: () => {
      setErrorOpen(true);
    },
  });
  const { data } = useQuery(['campaign', 'mileage'], getMileage);
  console.log(data);
  const mileage = data?.data?.amount;
  const toggleDialog = () => {
    setOpen((pre) => !pre);
    toggleInfoDialog();
  };
  const toggleInfoDialog = () => {
    setInfoOpen((pre) => !pre);
  };

  const toggleErrorDialog = () => {
    setErrorOpen((pre) => !pre);
  };

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
            <img src={giveaway1} style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giveaway2} style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giveaway3} style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giveaway3} style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giveaway1} style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giveaway2} style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giveaway3} style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giveaway3} style={{ borderRadius: '20px', width: '90%', objectFit: 'cover' }} />
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
            style={{ marginTop: '30px', fontWeight: 700, fontSize: '18px' }}
          >
            경품 응모하기
          </Button>
        </motion.div>
        <span style={{ fontSize: '12px', marginTop: '6px', color: 'gray' }}>남은 응모권: {mileage}</span>
      </div>
      <BlenderDialog open={true} toggleDialog={toggleDialog}>
        <h1
          style={{
            margin: 0,
            padding: '2rem',
            textAlign: 'center',
            letterSpacing: '0.6rem',
            fontWeight: 700,
            fontSize: '3rem',
          }}
        >
          응모완료
        </h1>
      </BlenderDialog>
      <Snackbar open={infoOpen} autoHideDuration={4000} onClose={toggleInfoDialog}>
        <Alert severity="info" sx={{ width: '100%' }}>
          응모결과는 이메일로 안내해 드리겠습니다.
        </Alert>
      </Snackbar>
      <Snackbar open={errorOpen} autoHideDuration={4000} onClose={toggleErrorDialog}>
        <Alert severity="error">마일리지가 부족합니다.</Alert>
      </Snackbar>
    </>
  );
};

export default CampaignPage;
