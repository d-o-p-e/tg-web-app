import { Badge } from '@mui/icons-material';
import { Avatar, Box, Divider, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import blueGrey from '@mui/material/colors/blueGrey';
import lightBlue from '@mui/material/colors/blueGrey';
import orange from '@mui/material/colors/orange';
import yellow from '@mui/material/colors/yellow';
import ProfileBadge from './Badge';
import { motion } from 'framer-motion';

interface UserProfileProps {
  toggleDialog: () => void;
}

const UserProfile: FC<UserProfileProps> = ({ toggleDialog }) => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ backgroundColor: blueGrey[50] }}>
        <Grid container justifyContent="center" sx={{ my: 2 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100, fontSize: 60 }}>
            R
          </Avatar>
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h6" component="h6" sx={{ fontWeight: 700, fontSize: '20px' }}>
            테스트 계정
          </Typography>
        </Grid>
        <Grid container justifyContent="center" spacing={2} sx={{ marginTop: '10px' }}>
          <Grid item md={1}>
            <ProfileBadge />
          </Grid>
          <Grid item md={1}>
            <ProfileBadge />
          </Grid>
          <Grid item md={1}>
            <ProfileBadge />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: '50px', backgroundColor: lightBlue[50] }}>
        <Grid item md={3} sx={{ cursor: 'pointer' }} onClick={toggleDialog}>
          <motion.div whileHover={{ scale: 1.2 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
            <img
              src="/src/assets/img.png"
              alt="Paella dish"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </Grid>
        <Grid item md={3} sx={{ cursor: 'pointer' }} onClick={toggleDialog}>
          <motion.div whileHover={{ scale: 1.2 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
            <img
              src="/src/assets/img.png"
              alt="Paella dish"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </Grid>
        <Grid item md={3} sx={{ cursor: 'pointer' }} onClick={toggleDialog}>
          <motion.div whileHover={{ scale: 1.2 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
            <img
              src="/src/assets/img.png"
              alt="Paella dish"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </Grid>
        <Grid item md={3} sx={{ cursor: 'pointer' }} onClick={toggleDialog}>
          <motion.div whileHover={{ scale: 1.2 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
            <img
              src="/src/assets/img.png"
              alt="Paella dish"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </Grid>
        <Grid item md={3} sx={{ cursor: 'pointer' }} onClick={toggleDialog}>
          <motion.div whileHover={{ scale: 1.2 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
            <img
              src="/src/assets/img.png"
              alt="Paella dish"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
};

export default UserProfile;
