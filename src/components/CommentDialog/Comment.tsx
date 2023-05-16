import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';
import red from '@mui/material/colors/red';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Comment = () => {
  return (
    <section>
      <Card sx={{ mt: '30px' }}>
        <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>} title="테스트 계정" subheader="2023/05/01" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};

export default Comment;
