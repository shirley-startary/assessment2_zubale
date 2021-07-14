import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Question from './Question.jsx';

const ListQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(()=> {
    fetch('jsonData/frontend-questions.json')
    .then(response => response.json())
    .then(datos => {
      setQuestions(datos.questions)
    })
  }, [])

  return (
    <div>
      <Container>
        {questions.map(item => {          
          return <Question elemento={item}/>
        })}
      </Container>
      
    </div>
  );
};

export default ListQuestions;