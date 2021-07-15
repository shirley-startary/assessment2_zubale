import React from 'react';
import Typography from '@material-ui/core/Typography'
import {  
  makeStyles, 
  TextField, 
  MenuItem, 
  InputLabel,
  InputAdornment,
  Button,
  Container
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { LensTwoTone } from '@material-ui/icons';
import { useState } from 'react';

const currencies = [
  {
    value: 'USD',
    label: '1',
  },
  {
    value: 'EUR',
    label: '2',
  },
  {
    value: 'BTC',
    label: '3',
  },
  {
    value: 'JPY',
    label: '4',
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection:"row",

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex'
    },
  },
  margin: {
    margin: theme.spacing(1),
  },

}));

const FormQuestions = ({questions, handleQuestionsFilter}) => {
  const classes = useStyles();
  const [questionType, setQuestionType] = React.useState('');

  const handleChange = (event) => {
    setQuestionType(event.target.value);
  };

  const handleChangeName = (event) => {
    // console.log(event.target.value)
    // setQuestionName(event.target.value)
    handleQuestionsFilter(event.target.value)
  }

  const filterQuestionType = () => {  
    const unicos = [];
    for(let i = 0; i < questions.length; i++) {
      const elemento = questions[i].question_type;
      if (!unicos.includes(questions[i].question_type)) {
        unicos.push(elemento);
      }
    }
    return unicos;
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h6" color="initial">
        QUESTIONS
      </Typography>  
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.divcontainer}>
          <InputLabel className={classes.margin}>
            Type of Questions
          </InputLabel>
          <TextField
            id="standard-number"
            select
            type="Text"
            value={questionType}
            onChange={handleChange}
          >
            
            {filterQuestionType().map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
          </TextField>
        </div>
        <div>            
          <InputLabel className={classes.margin}>
            Title
          </InputLabel>
          <TextField
            id="input-with-icon-textfield"
            onChange={handleChangeName}
            // value={questionName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            />
        </div>
        <Button variant="contained" color="primary">
          <AddCircleIcon />
          NEW QUESTIONS
        </Button>
      </form>
    </Container>
  );
};

export default FormQuestions;