import React, { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { blue, green, grey, lightBlue, orange, red } from '@mui/material/colors';
import { muiToolbarHeights } from './constants';

type ThemeProviderProps = {
  children: React.ReactNode;
};

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: blue[700],
//       light: blue[50],
//     },
//     error: {
//       main: red[700],
//       light: red[50],
//     },
//     success: {
//       main: green[800],
//       light: green[50],
//     },
//     warning: {
//       main: orange[800],
//     },
//     info: {
//       main: lightBlue[700],
//     },
//     secondary: {
//       main: grey[800],
//       light: grey[50],
//     },
//     text: {
//       primary: grey[900],
//       secondary: '#666666',
//     },
//   },
// });

// theme.components = {
//   MuiToolbar: {
//     styleOverrides: {
//       root: {
//         height: 56,
//         [theme.breakpoints.down('xs')]: {
//           height: muiToolbarHeights.xs,
//         },
//         [theme.breakpoints.down('sm')]: {
//           height: muiToolbarHeights.sm,
//         },
//         [theme.breakpoints.down('md')]: {
//           height: muiToolbarHeights.md,
//         },
//       },
//     },
//   },
// }; // Set theme overrides based on constants

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
