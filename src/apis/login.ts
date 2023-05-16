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
  return api.get(`/oauth/kakao?code=${code}`);
};