export interface Post {
  postId: number;
  content: string;
  imageUrl: string;
  category: 'EARLY_BIRD' | 'WORKOUT';
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

export interface WritePost {
  content: string;
  category: 'EARLY_BIRD' | 'WORKOUT';
  image: any;
}
