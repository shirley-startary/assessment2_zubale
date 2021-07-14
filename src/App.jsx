import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider,Container } from '@material-ui/core';
import theme from './themeConfig';

import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';

const useStyle = makeStyles({

})

function App() {
  const classes = useStyle()
  return (
    <ThemeProvider theme= {theme}>
      <Navbar />
      <Main/>
      
    </ThemeProvider>
  );
}

export default App;
