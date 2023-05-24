import { Badge } from '@mui/icons-material';
import { Avatar, Box, Divider, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import blueGrey from '@mui/material/colors/blueGrey';
import lightBlue from '@mui/material/colors/blueGrey';
import orange from '@mui/material/colors/orange';
import yellow from '@mui/material/colors/yellow';
import ProfileBadge from './Badge';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/apis/user';
import { useParams } from 'react-router-dom';
import { getFeedsByUserId } from '@/apis/feed';
import { Post } from '@/typings/post';
import { AxiosResponse } from 'axios';

interface UserProfileProps {
  toggleDialog: () => void;
  feedData: AxiosResponse<Post[], any> | undefined;
}

const UserProfile: FC<UserProfileProps> = ({ toggleDialog, feedData }) => {
  const params = useParams();
  const { data } = useQuery(['user', Number(params.id)], () => getUserById(Number(params.id)));

  return (
    <>
      <Grid container justifyContent="center" sx={{ backgroundColor: blueGrey[50] }}>
        <Grid container justifyContent="center" sx={{ my: 2 }}>
          <Avatar alt="Remy Sharp" src={data?.data.profileImage} sx={{ width: 100, height: 100, fontSize: 60 }}>
            {data?.data.nickname?.[0]}
          </Avatar>
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h6" component="h6" sx={{ fontWeight: 700, fontSize: '20px' }}>
            {data?.data.nickname}
          </Typography>
        </Grid>
        <Grid container justifyContent="center" spacing={2} sx={{ marginTop: '10px' }}>
          <Grid item md={1}>
            <ProfileBadge name="기상미션" count={data?.data.earlyBirdCount} />
          </Grid>
          <Grid item md={1}>
            <ProfileBadge name="알고리즘 미션" count={data?.data.algorithmCount} />
          </Grid>
          <Grid item md={1}>
            <ProfileBadge name="운동미션" count={data?.data.workoutCount} />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: '50px', backgroundColor: lightBlue[50] }}>
        {feedData?.data.map((feed) => (
          <Grid item md={3} sx={{ cursor: 'pointer' }} onClick={toggleDialog}>
            <motion.div whileHover={{ scale: 1.2 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
              <img
                src={feed.imageUrl}
                alt="Paella dish"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UserProfile;
