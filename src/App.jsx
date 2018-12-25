import React, { Component } from 'react';
import Person from './Person/Person';
import Head from './Components/Header';
import yellow from './assets/burger_edit.svg';

const Header = 'hello there';
class App extends Component {
    state = {
      persons: [
        { name: 'Itlog', age: 28 },
        { name: 'Richard', age: 40 },
        { name: 'Eliamer', age: 29 }
      ],
      otherState: 'some other value',
      showPersons: false
    }

    switchNameHandler = () => {
      // Dont do this  --- this.state.persons[0].name = 'Hahaha';
      this.setState({
        persons: [
          { name: 'Maximillian Itlog', age: 29 },
          { name: 'Manu Ginobilli', age: 30 },
          { name: 'Eliamer', age: 29 }
        ]
      });
    }

    nameChangeHandler = (event) => {
      this.setState({
        persons: [
          { name: 'newName', age: 50 },
          { name: event.target.value, age: 90 },
          { name: 'Stephanie', age: 12 }
        ]
      });
    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow });
    }

    render() {
      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map(person => (
              <Person
                name={person.name}
                age={person.age}
              />
            ))}
          </div>
        );
      }

      return (
        <div className='App' style={body}>

          <Head />
          <img src={yellow} alt='2ndLogo' style={logoYellow} />
          <h1 style={{ textAlign: 'center' }}>{Header}</h1>
          <button
            style={btn}
            onClick={this.togglePersonHandler}
          >Toggle Persons</button>
          {persons}
        </div>
      );
    }
}


const body = {
  boxSizing: 'border-box',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 'normal',
  fontStyle: 'normal',
  margin: '0'

};

const btn = {
  backgroundColor: '#00C05E',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
  textAlign: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0.5rem',
  color: '#ffffff',
  fontWeight: '600'
};


const logoYellow = {
  width: '100%',
  maxWidth: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: '0 auto'
};


// explode


export default App;
