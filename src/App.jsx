import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import theme from './themeConfig';

import Navbar from './components/Navbar.jsx';

const useStyle = makeStyles({
  juanito:{
    backgroundColor: 'red',
  }
})

function App() {
  const classes = useStyle()
  return (
    <ThemeProvider theme= {theme}>
      <Navbar />
      <div className={classes.juanito}>
        <Typography variant="h1" color="initial">

        </Typography>
      </div>

    </ThemeProvider>
  );
}

export default App;
