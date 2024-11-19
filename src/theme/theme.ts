'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-inter)',
    h3: {
      fontSize: 22,
      fontWeight: 600,
    },
    body2: {
      fontSize: 14,
    },

    subtitle1: {
      fontSize: 15,
    },
  },
});

export default theme;
