import { Box, Dialog } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface BlenderDialogProps {
  open: boolean;
  toggleDialog: () => void;
  children: ReactNode;
}
const clapMotion = new URL('/src/assets/clap_motion.mp4', import.meta.url).href;
const BlenderDialog: FC<BlenderDialogProps> = ({ open, children, toggleDialog }) => {
  return (
    <Dialog open={open} onClose={toggleDialog}>
      <div style={{ backgroundColor: '#B8B6BA', padding: '1rem' }}>
        <video autoPlay loop muted playsInline>
          <source src={clapMotion} type="video/mp4" />
        </video>
        {children}
      </div>
    </Dialog>
  );
};

export default BlenderDialog;