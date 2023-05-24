import api from './axios';

export const getUserInfo = (targetUserId: number) => {
  return api.get(`user/${targetUserId}`);
};
