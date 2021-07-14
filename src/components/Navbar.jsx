import React from 'react';

import { AppBar, makeStyles, Toolbar,Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles(theme => ({
  offset:theme.mixins.toolbar,
 
  title: {
    flexGrow:1
  }
}))

const Navbar = () => {
  const classes = useStyle()
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6" align="center" className={classes.title}>
            Zubale Zoul
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  )
};

export default Navbar;