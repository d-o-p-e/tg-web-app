import { Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMutation } from '@tanstack/react-query';
import { postCampaign } from '@/apis/campaign';
import { ReactComponent as GiftIcon } from '@/assets/gift.svg';
import { motion } from 'framer-motion';

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
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0], scale: 1 }}
          transition={{
            times: [0, 0.25, 0.5, 0.75, 1],
            repeatDelay: 1.8,
            repeat: Infinity,
          }}
        >
          <GiftIcon width={400} height={400} />
        </motion.div>
        <Button variant="contained" size="large" onClick={() => mutate(1)}>
          경품 추첨하기
        </Button>
        <span style={{ fontSize: '12px' }}>남은 마일리지: 1000</span>
      </div>
    </>
  );
};

export default CampaignPage;
