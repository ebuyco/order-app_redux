import React, { PureComponent } from 'react';
import Persons from '../Persons/Persons';
import Char from '../Char/Char';
import Validation from '../Validation/Validation';
import Cockpit from '../Cockpit/Cockpit';
import classes from './App.css';
import Head from '../Header';
import yellow from '../../assets/burger_edit.svg';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '129023', name: 'Itlog', age: 28 },
        { id: '129923', name: 'Richard', age: 40 },
        { id: '1902334', name: 'Success', age: 22 }
      ],
      userInput: '',
      header: 'Assignment 1',
      otherState: 'some other value',
      showPersons: false,
      submitted: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside component WillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidmount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] Inside shouldComponentUpdate()');
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate() {
    console.log('[App.js] Inside componentWillUpdate()');
  }

  componentDidUpdate() {
    console.log('[App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     { id: '129023', name: 'Itlog', age: 28 },
  //     { id: '129923', name: 'Richard', age: 40 },
  //     { id: '1902334', name: 'Eliamer', age: 29 }
  //   ],
  //   userInput: '',
  //   header: 'Assignment 1',
  //   otherState: 'some other value',
  //   showPersons: false,
  //   submitted: false
  // }

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
      console.log('[App.js] Inside render()');
      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
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
        <Aux style={body}>
          <button onClick={() => {
            this.setState({
              showPersons: true
            });
          }}
          >Show Persons</button>

          <Head
            WNU='stateless'
            age='haha'
            title='ngalan'
          >Just learn</Head>
          <img src={yellow} alt='2ndLogo' style={logoYellow} />
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
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
          <p style={charlistStyle}>{this.state.userInput}</p>
          <Validation
            inputLength={this.state.userInput.length}
          />
          <h3>{charList}</h3>
        </Aux>
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


const logoYellow = {
  width: '100%',
  maxWidth: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: '0 auto'
};


const assignment = {
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',

};

const charlistStyle = {
  textAlign: 'center',
  fontSize: '1em',
  width: '100%'
};

export default withClass(App, classes.App);
