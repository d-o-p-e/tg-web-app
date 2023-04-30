import { createTheme } from '@mui/material';

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
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
});
