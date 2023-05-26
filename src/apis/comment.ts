import { Comment } from '@/typings/comment';
import api from './axios';

export const getComments = (postId: number) => {
  return api.get<Comment[]>(`comment/${postId}/comment`);
};

export const postComment = ({ postId, content }: { postId: number; content: string }) => {
  return api.post(`comment/${postId}/comment`, { content: content });
};

export const deleteComment = ({ postId, commentId }: { postId: number; commentId: number }) => {
  return api.delete(`comment/${postId}/comment/${commentId}`);
};
