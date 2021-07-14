import React from 'react';
import { 
  Card,  
  CardContent,
  CardActionArea,
  Button,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const Question = ({elemento}) => {
  return (
    <Card>
      <CardContent>
        <Typography>{elemento.question_config.slug}</Typography>
        <Typography component="p" variant="h6" color="initial">
          {elemento.question_type}
        </Typography>
        <Typography variant="h6" color="initial">
          Title: {elemento.title}
        </Typography>
        <Typography variant="h6" color="initial">
          Attribute: {elemento.question_config.attribute_name}
        </Typography>
        <Typography variant="h6" color="initial">
          Bucket: {elemento.question_config.bucket}
        </Typography>
      </CardContent>
      <CardActionArea>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardActionArea>
    </Card>
  );
};

export default withStyles({

})(Question);