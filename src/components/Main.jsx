import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles,Container } from '@material-ui/core';
import FormQuestions from './FormQuestions.jsx';
import ListQuestions from './ListQuestions.jsx';


const useStyle = makeStyles({

})

const  Main = () => {
  const classes = useStyle();

  return (
   
    <Container maxWidth="xl">
      <Typography variant="h4" color="primary">
        Form Admin
      </Typography>   
      <FormQuestions />
      <ListQuestions />
    </Container>
  );
}

export default Main;