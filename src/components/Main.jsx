import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles,Container } from '@material-ui/core';


const useStyle = makeStyles({

})

const  Main = () => {
  const classes = useStyle();

  return (
   
    <Container maxWidth="xl">
        <Typography variant="h4" color="primary">
          Form Admin
        </Typography>     
    </Container>
  );
}

export default Main;