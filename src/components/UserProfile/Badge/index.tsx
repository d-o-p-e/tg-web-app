import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import blueGrey from '@mui/material/colors/blueGrey';

interface ProfileBadgeProps {
  name: string;
  count?: number;
}

// 프로필 뱃지 컴포넌트
const ProfileBadge: FC<ProfileBadgeProps> = ({ name, count }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h6" sx={{ fontWeight: 700, fontSize: '15px' }}>
        {name}
      </Typography>
      <MilitaryTechIcon sx={{ fontSize: 50, color: blueGrey[900] }} />
      <Typography component="span" sx={{ fontSize: '14px' }}>
        {count}
      </Typography>
    </Box>
  );
};

export default ProfileBadge;
