import React from 'react';
import Radium from 'radium';
import './Person.css';


const person = (props) => {
  const wrapper = {
    border: '3px dashed blue',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '28px',
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className='Person' style={wrapper}>
      <p onClick={props.click}> I'm {props.name} and I am {props.age} years of age!</p>
      <p>{props.children}</p>
      <input
        type='text'
        onChange={props.changed}
        value={props.name}
      />
      {/* <p onClick={props.narnia}>test</p> */}
    </div>
  );
};

export default Radium(person);
