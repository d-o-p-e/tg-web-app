import api from './axios';

export const postSignInWithKakao = () => {
  return api.get(
    `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${
      import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_KAKAO_REDIRECT_URI_PROD
        : import.meta.env.VITE_KAKAO_REDIRECT_URI_DEV
    }&response_type=code`
  );
};

export const getAccessTokenWIthKakao = (code: string | null) => {
  return import.meta.env.MODE === 'production'
    ? api.get(`/user/oauth/kakao?code=${code}`)
    : api.get(`/user/oauth/kakao/test?code=${code}`);
};
