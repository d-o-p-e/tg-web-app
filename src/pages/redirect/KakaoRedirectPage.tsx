import { getAccessTokenWIthKakao } from '@/apis/login';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { FC, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const KakaoRedirectPage = () => {
  // 카카오 로그인 후 리다이렉트 되는 페이지
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('code');
  const queryClient = useQueryClient();
  const { data, refetch } = useQuery(['kakao', 'code'], () => getAccessTokenWIthKakao(accessToken), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['user', 'me']);
      navigate('/');
    },
  });

  return <div></div>;
};

export default KakaoRedirectPage;
