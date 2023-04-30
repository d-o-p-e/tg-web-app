import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'swiper/css';
import 'swiper/css/navigation';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
