import { createTheme } from '@mui/material';
import blueGrey from '@mui/material/colors/blueGrey';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          position: 'relative',
          height: '100%',
        },
        body: {
          position: 'relative',
          height: '100%',
          backgroundColor: blueGrey[50],
        },
        '#root': {
          height: '100%',
          minWidth: '1095px',
        },
        '.swiper-wrapper': {
          transitionTimingFunction: 'linear',
        },
      },
    },
  },
});
