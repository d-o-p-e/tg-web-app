import { postFeed } from '@/apis/feed';
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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import LoadingDot from './LoadingDot';
import BlenderDialog from '../BlenderDialog';

interface FeedPostDialogProps {
  toggleDialog: () => void;
  open: boolean;
}

// 피드 작성 다이얼로그 컴포넌트

const FeedPostDialog: FC<FeedPostDialogProps> = ({ toggleDialog, open }) => {
  const queryClient = useQueryClient();
  const [blenderEarlyBirdOpen, setBlenderEarlyBirdOpen] = useState(false);
  const [blenderWorkOutOpen, setBlenderWorkOutOpen] = useState(false);
  const [image, setImage] = useState<File | null>();
  const [category, setCategory] = useState<'EARLY_BIRD' | 'WORKOUT'>('EARLY_BIRD');
  const [content, setContent] = useState('');
  const { mutate, isLoading } = useMutation(postFeed, {
    onSuccess: () => {
      if (category === 'EARLY_BIRD') toggleBlenderEarlyBirdDialog();
      else if (category === 'WORKOUT') toggleBlenderWorkOutDialog();
      setImage(null);
      setContent('');
      toggleDialog();
      setCategory('EARLY_BIRD');
      queryClient.invalidateQueries(['feeds']);
    },
  });

  const onChangeImage = (uploadedImage: File) => {
    setImage(uploadedImage);
  };
  const onDrop = (files: File[]) => {
    onChangeImage(files[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'EARLY_BIRD' || e.target.value === 'WORKOUT') {
      setCategory(e.target.value);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!image || !category || !content) return alert('모든 항목을 입력해주세요.');
    const data = new FormData();
    data.append('image', image);
    data.append('category', category);
    data.append('content', content);
    mutate(data);
  };

  const toggleBlenderEarlyBirdDialog = () => {
    setBlenderEarlyBirdOpen((pre) => !pre);
  };

  const toggleBlenderWorkOutDialog = () => {
    setBlenderWorkOutOpen((pre) => !pre);
  };

  return (
    <>
      <Dialog onClose={toggleDialog} open={open}>
        <form onSubmit={onSubmit}>
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
                <img
                  src={URL.createObjectURL(image)}
                  width="100%"
                  height="100%"
                  style={{ margin: 'auto', display: 'block', aspectRatio: 1 / 1 }}
                />
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
              <TextField
                label="본문의 내용을 적어주세요"
                multiline
                rows={3}
                fullWidth
                value={content}
                onChange={onChangeContent}
              />
              <Typography variant="h6" component="h6" sx={{ fontSize: '18px', fontWeight: 700, marginTop: '20px' }}>
                카테고리
              </Typography>
              <RadioGroup row onChange={onChangeCategory}>
                <FormControlLabel value="EARLY_BIRD" control={<Radio />} label="기상 미션" />
                <FormControlLabel value="WORKOUT" control={<Radio />} label="운동 미션" />
              </RadioGroup>
            </Box>
          </Box>
          <Button
            variant="contained"
            type={isLoading ? undefined : 'submit'}
            sx={{ margin: 'auto', display: 'block', marginBottom: '0.8rem', fontSize: '1.1rem', fontWeight: 700 }}
          >
            {!isLoading ? (
              '작성하기'
            ) : (
              <>
                <LoadingDot />
              </>
            )}
          </Button>
        </form>
      </Dialog>
      <BlenderDialog open={blenderEarlyBirdOpen} toggleDialog={toggleBlenderEarlyBirdDialog}>
        <h1
          style={{
            margin: 0,
            padding: '2rem',
            textAlign: 'center',
            letterSpacing: '0.6rem',
            fontWeight: 700,
            fontSize: '3rem',
          }}
        >
          기상 미션 완료
        </h1>
      </BlenderDialog>
      <BlenderDialog open={blenderWorkOutOpen} toggleDialog={toggleBlenderWorkOutDialog}>
        <h1
          style={{
            margin: 0,
            padding: '2rem',
            textAlign: 'center',
            letterSpacing: '0.6rem',
            fontWeight: 700,
            fontSize: '3rem',
          }}
        >
          운동 미션 완료
        </h1>
      </BlenderDialog>
    </>
  );
};

export default FeedPostDialog;
