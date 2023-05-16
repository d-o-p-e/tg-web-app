import api from './axios';

export const postSignInWithKakao = () => {
  return api.post('/post');
};
