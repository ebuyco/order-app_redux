import React from 'react';


const Validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.inputLength <= 5) {
    validationMessage = 'Text to short';
  }
  return (
    <div style={red}>
      <p>{validationMessage}</p>
    </div>
  );
};

const red = {
  color: 'red',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2em'

};


export default Validation;
