import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
//import { makeStyles, withStyles } from '@material-ui/core';
import Question from './Question.jsx';

// const useStyle = makeStyles({
//   background : {
//     background: "red",
//     padding:'16px 0 0 0',
//   }
// });

const ListQuestions = () => {
  // const classes = useStyle();
  const [questions, setQuestions] = useState([]);
  useEffect(()=> {
    fetch('jsonData/frontend-questions.json')
    .then(response => response.json())
    .then(datos => {
      setQuestions(datos.questions)
    })
  }, [])

  return (
      <Container maxWidth="xl">
        {questions.map(item => {          
          return <Question elemento={item}/>
        })}
      </Container>      
  );
};

export default ListQuestions;