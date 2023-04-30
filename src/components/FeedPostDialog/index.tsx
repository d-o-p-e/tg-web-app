import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FeedPostDialogProps {
  toggleDialog: () => void;
  open: boolean;
}

const FeedPostDialog: FC<FeedPostDialogProps> = ({ toggleDialog, open }) => {
  const [image, setImage] = useState('');

  const onChangeImage = (uploadedImage: File) => {
    setImage(URL.createObjectURL(uploadedImage));
  };
  const onDrop = (files: File[]) => {
    onChangeImage(files[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Dialog onClose={toggleDialog} open={open}>
      <Box>
        <Box
          {...getRootProps()}
          sx={{
            padding: '32px',
            backgroundColor: '#fff',
            zIndex: '11',
            gap: '2rem',
          }}
        >
          {image ? (
            <img src={image} width={170} height={100} style={{ margin: 'auto', display: 'block' }} />
          ) : (
            <>
              <input {...getInputProps()} />
              {isDragActive ? (
                <CircularProgress />
              ) : (
                <Box
                  sx={{
                    py: '22px',
                    borderRadius: '16px',
                    border: '3px dashed #e0e0e0',
                    textAlign: 'center',
                  }}
                >
                  <p>이미지를 드래그하거나 클릭하여 첨부해주세요.</p>
                </Box>
              )}
            </>
          )}
        </Box>
        <Box sx={{ width: '100%', px: '32px', mb: '32px' }}>
          <Typography variant="h6" component="h6" sx={{ fontSize: '18px', fontWeight: 700 }}>
            본문
          </Typography>
          <TextField label="본문의 내용을 적어주세요" multiline rows={3} fullWidth />
          <Typography variant="h6" component="h6" sx={{ fontSize: '18px', fontWeight: 700, marginTop: '20px' }}>
            카테고리
          </Typography>
          <RadioGroup row>
            <FormControlLabel value="기상 미션" control={<Radio />} label="기상 미션" />
            <FormControlLabel value="운동" control={<Radio />} label="운동" />
            <FormControlLabel value="코딩 테스트" control={<Radio />} label="코딩 테스트" />
          </RadioGroup>
        </Box>
      </Box>
      <Button variant="contained">작성하기</Button>
    </Dialog>
  );
};

export default FeedPostDialog;
