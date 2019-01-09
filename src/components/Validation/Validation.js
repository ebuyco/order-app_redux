import React from 'react';
import classes from './Validation.css';


const Validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.inputLength <= 5) {
    validationMessage = 'Text to short';
  }
  return (
    <div className={classes.red}>
      <p>{validationMessage}</p>
    </div>
  );
};

export default Validation;
