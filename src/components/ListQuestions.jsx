import React from 'react';
import { Container } from '@material-ui/core';
//import { makeStyles, withStyles } from '@material-ui/core';
import Question from './Question.jsx';

// const useStyle = makeStyles({
//   background : {
//     background: "red",
//     padding:'16px 0 0 0',
//   }
// });

const ListQuestions = ({questions}) => {
  // const classes = useStyle();


  return (
      <Container maxWidth="xl">
        {questions.map(item => {          
          return <Question elemento={item}/>
        })}
      </Container>      
  );
};

export default ListQuestions;