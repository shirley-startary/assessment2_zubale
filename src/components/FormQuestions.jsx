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

const FormQuestions = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

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
            value={currency}
            onChange={handleChange}
          >
            
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
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