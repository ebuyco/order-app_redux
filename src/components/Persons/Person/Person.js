import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>Im {this.props.name} and I am
          {this.props.age} years of age</p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
    // return [
    //   <p key="1" onClick={this.props.click}>Im {this.props.name} and I am
    //       {this.props.age} years of age</p>
    //        <p key="2">{this.props.children}</p>
    //        <input
    //         key="3"
    //         type='text'
    //       onChange={this.props.changed}
    //         value={this.props.name}
    //       />
    // ];
  }
}

export default withClass(Person, classes.Person);
