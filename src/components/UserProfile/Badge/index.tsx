import { Box, Typography } from '@mui/material';
import React from 'react';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import blueGrey from '@mui/material/colors/blueGrey';

const ProfileBadge = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h6" sx={{ fontWeight: 700, fontSize: '15px' }}>
        기상미션
      </Typography>
      <MilitaryTechIcon sx={{ fontSize: 50, color: blueGrey[900] }} />
      <Typography component="span" sx={{ fontSize: '14px' }}>{`100`}</Typography>
    </Box>
  );
};

export default ProfileBadge;
