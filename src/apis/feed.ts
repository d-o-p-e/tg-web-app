import { Post, WritePost } from '@/typings/post';
import api from './axios';

export const getFeedsByUserId = (userId: number) => {
  return api.get<Post[]>(`/community/feed?targetUserId=${userId}&size=100`);
};

export const getAllFeeds = () => {
  return api.get<Post[]>(`/community/feed?size=100`);
};

export const postFeed = (data: FormData) => {
  return api.post(`/community`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const postFeedLike = (postId: number) => {
  return api.post(`/community/${postId}/like`);
};

export const deleteFeedLike = (postId: number) => {
  return api.delete(`/community/${postId}/like`);
};

export const deleteFeed = (postId: number) => {
  return api.delete(`/community/${postId}`);
};
