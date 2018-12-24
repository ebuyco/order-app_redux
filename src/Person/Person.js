import React from 'react';
import './Person.css';


const person = props => (
  <div className='Person' style={wrapper}>
    <p onClick={props.click}> I'm {props.name} and I am {props.age} years of age!</p>
    <p>{props.children}</p>
    <input
      type='text'
      onChange={props.changed}
      value={props.name}
    />
  </div>

);

const wrapper = {
  border: '3px dashed blue',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '28px'

};

export default person;
