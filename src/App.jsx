import React, { Component } from 'react';
import Person from './Person/Person';
import Head from './Components/Header';
import yellow from './assets/burger_edit.svg';

const Header = 'hello there';
class App extends Component {
    state = {
      persons: [
        { id: '129023', name: 'Itlog', age: 28 },
        { id: '129923', name: 'Richard', age: 40 },
        { id: '1902334', name: 'Eliamer', age: 29 }
      ],
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
          <div>
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

export default App;
