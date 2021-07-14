import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles,Container, Box } from '@material-ui/core';
import FormQuestions from './FormQuestions.jsx';
import ListQuestions from './ListQuestions.jsx';


const useStyle = makeStyles({
  background : {
    background: "#EFEFEF",
    padding:'16px 0 0 0',
  },


})

const  Main = () => {
  const classes = useStyle();

  return (
   
    <Container maxWidth="xl" >
      <Box my={2}>
        <Typography variant="h4" color="primary"   >
          Form Admin
        </Typography> 
      </Box>
      <Container  maxWidth="xl" className={classes.background}>
        <FormQuestions />
        <ListQuestions />
      </Container>
    </Container>
  );
}

export default Main;