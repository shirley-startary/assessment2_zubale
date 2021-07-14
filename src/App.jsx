import React from 'react';

import {  ThemeProvider } from '@material-ui/core';
//import {makeStyles} from '@material-ui/core';
import theme from './themeConfig';

import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';

// const useStyle = makeStyles({
//   typography: {
//     fontFamily: [
//       'Montserrat',
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//   },
// })

function App() {
  // const classes = useStyle()
  return (
    <ThemeProvider theme= {theme}>
      <Navbar />
      <Main/>
      
    </ThemeProvider>
  );
}

export default App;
