import api from './axios';

export const createPost = () => {
  return api.post('community');
};

export const deletePost = (postId: number) => {
  return api.delete(`community/${postId}`);
};

export const likePost = (postId: number) => {
  return api.post(`community/${postId}/like`);
};

export const unlikePost = (postId: number) => {
  return api.delete(`community/${postId}/like`);
};

export const getFeed = (size: number, lastPostId: number, targetUserId: number) => {
  return api.get(`community/feed?size=${size}&lastPostId=${lastPostId}&targetUserId=${targetUserId}`);
};
