import React, { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { blue, green, grey, lightBlue, orange, red } from '@mui/material/colors';
import { bodyText, muiToolbarHeights, titleText } from './constants';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const theme = createTheme({
  typography: {
    ...bodyText,
    h1: {
      ...titleText,
      textTransform: 'uppercase',
      fontSize: '3.5rem',
    },
    h2: {
      ...titleText,
      textTransform: 'uppercase',
      fontSize: '2.5rem',
    },
    h3: {
      ...titleText,
      textTransform: 'uppercase',
      fontSize: '2rem',
    },
    h4: {
      ...titleText,
      textTransform: 'uppercase',
      fontSize: '1.75rem',
    },
    h5: {
      ...titleText,
      fontSize: '1.5rem',
    },
    h6: {
      ...titleText,
      fontSize: '1.25rem',
    },
    body1: {
      ...bodyText,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: blue[50],
      light: blue[700],
    },
    error: {
      main: red[50],
      light: red[700],
    },
    success: {
      main: green[50],
      light: green[800],
    },
    warning: {
      main: orange[800],
    },
    info: {
      main: lightBlue[200],
    },
    secondary: {
      main: grey[50],
      light: grey[800],
    },
    text: {
      primary: grey[200],
      secondary: '#666666',
    },
    background: {
      default: '#272730',
    },
  },
});

theme.components = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        height: 56,
        [theme.breakpoints.down('xs')]: {
          height: muiToolbarHeights.xs,
        },
        [theme.breakpoints.down('sm')]: {
          height: muiToolbarHeights.sm,
        },
        [theme.breakpoints.down('md')]: {
          height: muiToolbarHeights.md,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: '1rem',
      },
    },
  },
}; // Set theme overrides based on constants

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
