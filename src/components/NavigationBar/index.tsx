import React, { FC, PropsWithChildren } from 'react';
import { blueGrey } from '@mui/material/colors';
import { ReactComponent as KakaoLoginIcon } from '@/assets/kakao_login.svg';
import { Avatar, Button, CardHeader, FormGroupClassKey } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postSignInWithKakao } from '@/apis/login';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { getUserById } from '@/apis/user';

const kakao = (window as any).Kakao;

const NavigationBar: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { data } = useQuery(['user', 'me'], () => getUserById(0));
  let userInfo = data?.data;
  const queryClient = useQueryClient();
  console.log(queryClient.getQueryData(['kakao', 'code']));
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
        <Button sx={{ color: 'white', '&:hover': { backgroundColor: blueGrey[400] } }} onClick={() => navigate('/')}>
          <h1>Commited</h1>
        </Button>
        {userInfo ? (
          <>
            <div>
              <Button
                sx={{
                  width: '200px',
                  height: '70px',
                  color: 'white',
                  justifyContent: 'left',
                  '&:hover': { backgroundColor: blueGrey[400] },
                }}
                onClick={() => navigate(`/user/${userInfo?.userId}`)}
              >
                <Avatar sx={{ backgroundColor: blueGrey[100] }}>R</Avatar>
                <h3 style={{ marginLeft: '20px' }}>{userInfo?.nickname}</h3>
              </Button>
            </div>
            <div>
              <Button
                sx={{
                  width: '200px',
                  height: '70px',
                  color: 'white',
                  justifyContent: 'left',
                  '&:hover': { backgroundColor: blueGrey[400] },
                }}
                onClick={() => navigate('/campaign')}
              >
                <Avatar sx={{ backgroundColor: blueGrey[100] }}>
                  <CelebrationIcon />
                </Avatar>
                <h3 style={{ marginLeft: '20px' }}>응모하기</h3>
              </Button>
            </div>
          </>
        ) : (
          <Button
            sx={{ width: '200px', height: '70px' }}
            onClick={() =>
              kakao.Auth.authorize({
                redirectUri:
                  import.meta.env.MODE === 'production'
                    ? import.meta.env.VITE_KAKAO_REDIRECT_URI_PROD
                    : import.meta.env.VITE_KAKAO_REDIRECT_URI_DEV,
              })
            }
          >
            <KakaoLoginIcon />
          </Button>
        )}
      </nav>
      <main style={{ width: '80%', height: '100%', marginLeft: '20%', backgroundColor: blueGrey[50] }}>{children}</main>
    </>
  );
};

export default NavigationBar;
