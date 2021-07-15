import React, { useState, useEffect }  from 'react';
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

  const [questions, setQuestions] = useState([]);
  const [questionNameInput, setQuestionNameInput] = useState('');

  const [questionsFilter, setQuestionsFilter] = useState([]);

  useEffect(()=> {
    fetch('jsonData/frontend-questions.json')
    .then(response => response.json())
    .then(datos => {
      setQuestions(datos.questions)
    })
    handleQuestionsFilter(questionNameInput)
  }, []);

  const newPeticion = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(datos => {
      setQuestions(datos.questions)
    })
  }

  const handleQuestionsFilter = (value) => {
    // setCurrency(event.target.value);
    newPeticion('jsonData/frontend-questions.json');
    console.log(questions);
    
    const newArray = questions.filter(item => {
      if(item.title !== null) {
        //console.log(item, value);
        return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
        

      }
      return true
    //  item.title.includes(value) 
    
    })
    setQuestions(newArray)
    console.log(newArray)
    //setQuestionsFilter()
  }; 
  
  return (
    <Container maxWidth="xl" >
      <Box my={2}>
        <Typography variant="h4" color="primary">
          Form Admin
        </Typography> 
      </Box>
      <Container  maxWidth="xl" className={classes.background}>
        <FormQuestions questions={questions} handleQuestionsFilter={handleQuestionsFilter}/>
        <ListQuestions questions={questions} />
      </Container>
    </Container>
  );
}

export default Main;