interface Post {
  postId: number;
  content: string;
  imageUrl: string;
  category: 'EARLY_BIRD' | 'WORKOUT' | 'ALGORITHM';
  createdAt: string;
  updatedAt: string;
  userId: number;
  userNickname: string;
  userProfileImageUrl: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  isMyPost: boolean;
}
