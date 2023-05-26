import React, { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper';
import Feed from '../FeedCard';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AxiosResponse } from 'axios';
import { Post } from '@/typings/post';

interface FeedVerticalSliderProps {
  feedData: Post[] | undefined;
}
const FeedVerticalSlider: FC<FeedVerticalSliderProps> = ({ feedData }) => {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Mousewheel, Pagination]}
        style={{ width: '80%', height: '100%' }}
      >
        {feedData?.map((feed) => {
          return (
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Feed feed={feed} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default FeedVerticalSlider;

const dummyData = [
  {
    postId: 1,
    content: "I'm an early bird! I love waking up early and getting a head start on the day.",
    imageUrl: 'https://picsum.photos/id/1/200/200',
    category: 'EARLY_BIRD',
    createdAt: '2023-05-24T07:11:09.000Z',
    updatedAt: '2023-05-24T07:11:09.000Z',
    userId: 1,
    userNickname: 'Bard',
    userProfileImageUrl: 'https://picsum.photos/id/1/100/100',
    likeCount: 1,
    commentCount: 0,
    isLiked: false,
    isMyPost: true,
  },
  {
    postId: 2,
    content: 'I just finished a great workout! I feel so energized and accomplished.',
    imageUrl: 'https://picsum.photos/id/2/200/200',
    category: 'WORKOUT',
    createdAt: '2023-05-24T07:11:09.000Z',
    updatedAt: '2023-05-24T07:11:09.000Z',
    userId: 2,
    userNickname: 'Alice',
    userProfileImageUrl: 'https://picsum.photos/id/2/100/100',
    likeCount: 0,
    commentCount: 1,
    isLiked: false,
    isMyPost: false,
  },
  {
    postId: 3,
    content: "I just learned a new algorithm! I'm so excited to try it out.",
    imageUrl: 'https://picsum.photos/id/3/200/200',
    category: 'ALGORITHM',
    createdAt: '2023-05-24T07:11:09.000Z',
    updatedAt: '2023-05-24T07:11:09.000Z',
    userId: 3,
    userNickname: 'Bob',
    userProfileImageUrl: 'https://picsum.photos/id/3/100/100',
    likeCount: 2,
    commentCount: 0,
    isLiked: true,
    isMyPost: false,
  },
  {
    postId: 4,
    content: "I'm so excited for the weekend! I can't wait to relax and have some fun.",
    imageUrl: 'https://picsum.photos/id/4/200/200',
    category: 'EARLY_BIRD',
    createdAt: '2023-05-24T07:11:09.000Z',
    updatedAt: '2023-05-24T07:11:09.000Z',
    userId: 4,
    userNickname: 'Carol',
    userProfileImageUrl: 'https://picsum.photos/id/4/100/100',
    likeCount: 0,
    commentCount: 1,
    isLiked: false,
    isMyPost: false,
  },
  {
    postId: 6,
    content: "I just finished a new project! I'm so proud of myself for what I accomplished.",
    imageUrl: 'https://picsum.photos/id/6/200/200',
    category: 'ALGORITHM',
    createdAt: '2023-05-24T07:11:09.000Z',
    updatedAt: '2023-05-24T07:11:09.000Z',
    userId: 6,
    userNickname: 'David',
    userProfileImageUrl: 'https://picsum.photos/id/6/100/100',
    likeCount: 0,
    commentCount: 0,
    isLiked: false,
    isMyPost: false,
  },
  {
    postId: 7,
    content: "I just got a new job! I'm so excited to start my new chapter.",
    imageUrl: 'https://picsum.photos/id/7/200/200',
    category: 'EARLY_BIRD',
    createdAt: '2023-05-24T07:11:09.000Z',
    updatedAt: '2023-05-24T07:11:09.000Z',
    userId: 7,
    userNickname: 'Eve',
    userProfileImageUrl: 'https://picsum.photos/id/7/100/100',
    likeCount: 1,
    commentCount: 0,
    isLiked: true,
    isMyPost: false,
  },
  {
    postId: 8,
    content: "I just bought a new car! I'm so excited to drive it around.",
    imageUrl: 'https://picsum.photos/id/8/200/200',
    category: 'WORKOUT',
    createdAt: '2023-05-24T07:11:09.000Z',
    updatedAt: '2023-05-24T07:11:09.000Z',
    userId: 8,
    userNickname: 'Frank',
    userProfileImageUrl: 'https://picsum.photos/id/8/100/100',
    likeCount: 2,
    commentCount: 0,
    isLiked: true,
    isMyPost: false,
  },
  {
    postId: 9,
    content: "I just got engaged! I'm so happy to start my new life with my fiance.",
    imageUrl: 'https://picsum.photos/id/9/200/200',
    category: 'ALGORITHM',
    createdAt: '2023-05-24T07:11:09.000Z',
    updatedAt: '2023-05-24T07:11:09.000Z',
    userId: 9,
    userNickname: 'George',
    userProfileImageUrl: 'https://picsum.photos/id/9/100/100',
    likeCount: 0,
    commentCount: 1,
    isLiked: false,
    isMyPost: false,
  },
] as const;
