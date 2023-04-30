import React from 'react';
import { lightBlue } from '@mui/material/colors';
import { ReactComponent as KakaoLoginIcon } from '@/assets/kakao_login.svg';
import { Avatar, Button, CardHeader } from '@mui/material';

const NavigationBar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: lightBlue[300],
        height: '100%',
        color: 'white',
        width: '20%',
      }}
    >
      <h1>Commited</h1>
      <Button sx={{ width: '200px', height: '70px' }}>
        <KakaoLoginIcon />
      </Button>
      <div>
        <Button sx={{ width: '200px', height: '70px', color: 'white', justifyContent: 'left' }}>
          <Avatar sx={{ backgroundColor: lightBlue[100] }}>R</Avatar>
          <h3 style={{ marginLeft: '20px' }}>테스트</h3>
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;
