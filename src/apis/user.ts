import { User } from '@/typings/user';
import api from './axios';

export const getUserById = (userId: number | undefined) => {
  return api.get<User>(`/user/${userId}`);
};
