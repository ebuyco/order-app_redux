import React, { Component } from 'react';
import classes from './Person.css';


class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside component WillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidmount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update Persons.js] Inside componentWillRecieveprops', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[ComponentUpdate Person.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update Person.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>Im {this.props.name} and I am
          {this.props.age} years of age</p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
