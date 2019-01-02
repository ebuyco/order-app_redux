import React, { Component } from 'react';
import Person from './Person/Person';
import Head from './Components/Header';
import yellow from './assets/burger_edit.svg';

import Validation from './Validation/Validation';
import Char from './Char/Char';

const Header = 'hello there';
class App extends Component {
    state = {
      persons: [
        { id: '129023', name: 'Itlog', age: 28 },
        { id: '129923', name: 'Richard', age: 40 },
        { id: '1902334', name: 'Eliamer', age: 29 }
      ],
      userInput: '',
      header: 'Assignment 1',
      otherState: 'some other value',
      showPersons: false,
      submitted: false
    }

    // switchNameHandler = (newName) => {
    //   // Dont do this  --- this.state.persons[0].name = 'Hahaha';
    //   this.setState({
    //     persons: [
    //       { name: newName, age: 29 },
    //       { name: 'Manu Ginobilli', age: 30 },
    //       { name: 'Eliamer', age: 29 }
    //     ]
    //   });
    // }

    nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => p.id === id);
      const person = {
        ...this.state.persons[personIndex]
      };
      // const person = Object.assign({}, this.state.persons[personIndex]);

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({ persons });
    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow });
    }

    deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({ persons });
    }


    inputChangeHandler = (event) => {
      this.setState(
        { userInput: event.target.value }
      );
    }

    deleteCharHandler = (index) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({ userInput: updatedText });
    };

    // calls = (event) => {
    //   this.setState({
    //     submitted: true
    //   });
    //   console.log('calls');
    // }

    render() {
      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div style={lista}>
            {this.state.persons.map((person, index) => (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            ))}
          </div>
        );
      }

      const charList = this.state.userInput.split('').map((ch, index) => (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      ));


      return (
        <div className='App' style={body}>
          <Head
            WNU='stateless'
            age='haha'
            title='ngalan'
          >Just learn</Head>
          <img src={yellow} alt='2ndLogo' style={logoYellow} />
          <h1 style={{ textAlign: 'center' }}>{Header}</h1>
          <button
            style={btn}
            onClick={this.togglePersonHandler}
          >Toggle Persons</button>
          {/* <button
            onClick={() => this.switchNameHandler.bind('Max')}
          >Hi this is a Test</button> */}
          {persons}

          <hr />
          <p style={{ textAlign: 'center', fontSize: '1em' }}>{this.state.header}</p>
          <input
            style={assignment}
            type='text'
            onChange={this.inputChangeHandler}
            value={this.state.userInput}
          />
          <p>{this.state.userInput}</p>
          <Validation
            inputLength={this.state.userInput.length}
          />
          {charList}
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

const lista = {
  color: '#000000'
};

const assignment = {
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',

};

export default App;
