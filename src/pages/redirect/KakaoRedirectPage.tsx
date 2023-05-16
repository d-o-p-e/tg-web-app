import { getAccessTokenWIthKakao } from '@/apis/login';
import { useQuery } from '@tanstack/react-query';
import React, { FC, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const KakaoRedirectPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('code');
  console.log(accessToken);
    const { data, refetch } = useQuery(['kakao', 'code'], () => getAccessTokenWIthKakao(accessToken), {
      onSuccess: (data) => {
        console.log(data);
        navigate('/');
      },
    });

  return <div></div>;
};

export default KakaoRedirectPage;
