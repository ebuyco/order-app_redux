import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[ComponentUpdate Person.js] Inside
  // shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update Person.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render ()');
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    ));
  }
}


export default Persons;
