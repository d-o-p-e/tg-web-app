import React, { FC, PropsWithChildren } from 'react';
import { blueGrey } from '@mui/material/colors';
import { ReactComponent as KakaoLoginIcon } from '@/assets/kakao_login.svg';
import { Avatar, Button, CardHeader } from '@mui/material';

const NavigationBar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <nav
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: blueGrey[300],
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
            <Avatar sx={{ backgroundColor: blueGrey[100] }}>R</Avatar>
            <h3 style={{ marginLeft: '20px' }}>테스트</h3>
          </Button>
        </div>
      </nav>
      <main style={{ width: '80%', height: '100%', marginLeft: '20%' }}>{children}</main>
    </>
  );
};

export default NavigationBar;
