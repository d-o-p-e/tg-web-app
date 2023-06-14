import { motion } from 'framer-motion';
import React from 'react';

const Dot = {
  display: 'block',
  width: '0.4rem',
  height: '0.4rem',
  backgroundColor: 'white',
  borderRadius: '50%',
  marginLeft: '0.2rem',
};

const LoadingContainer = {
  display: 'flex',
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    opacity: '0%',
  },
  animate: {
    opacity: '100%',
  },
};

const DotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
} as const;

// 로딩 도트 컴포넌트
export default function LoadingDot() {
  return (
    <div style={{ display: 'inline-block', width: '100%' }}>
      <motion.div style={LoadingContainer} variants={ContainerVariants} initial="initial" animate="animate">
        <motion.span variants={DotVariants} transition={DotTransition}>
          작
        </motion.span>
        <motion.span variants={DotVariants} transition={DotTransition}>
          성
        </motion.span>
        <motion.span variants={DotVariants} transition={DotTransition}>
          중
        </motion.span>
      </motion.div>
    </div>
  );
}
