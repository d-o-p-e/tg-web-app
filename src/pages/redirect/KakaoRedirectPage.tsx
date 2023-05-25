import { getAccessTokenWIthKakao } from '@/apis/login';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { FC, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const KakaoRedirectPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('code');
  console.log(accessToken);
  const queryClient = useQueryClient();
  const { data, refetch } = useQuery(['kakao', 'code'], () => getAccessTokenWIthKakao(accessToken), {
    onSuccess: (data) => {
      queryClient.setQueryData(['user', 'me'], data);
      navigate('/');
    },
  });

  return <div></div>;
};

export default KakaoRedirectPage;
