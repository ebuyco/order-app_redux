import React from 'react';
import classes from './Cockpit.css';
import Aux from '../hoc/Aux';

const Header = 'hello there';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join[''];
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes will be green
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes will be red
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <h1 className={assignedClasses.join('')}>{Header}</h1>
      <button
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons</button>
    </Aux>
  );
};

export default cockpit;
