import React, { Component } from 'react';
import Person from './Person/Person';

const Header = "hello there";
class App extends Component {
    state = {
         persons : [
             {name: 'Itlog', age: 28},
             {name: 'Richard', age: 40},
             {name: 'Eliamer', age: 29}
         ],
         otherState: 'some other value',
         showPersons: false
    }

    switchNameHandler = () => { 
        //Dont do this  --- this.state.persons[0].name = 'Hahaha';
        this.setState({
            persons: [
                {name: 'Maximillian Itlog', age: 29},
                {name: 'Manu Ginobilli', age: 30},
                {name: 'Eliamer', age: 29}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'newName', age: 50},
                {name: event.target.value , age: 90},
                {name: 'Stephanie', age: 12}
            ]
        })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render(){
        const btn  = {
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

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                   {this.state.persons.map(person => {
                       return <Person 
                        name= {person.name}
                        age={person.age} />
                   })} 
                </div> 
            );
        }

        return(
            <div className="App">
            <h1 style={{textAlign: "center"}}>{Header}</h1>
            <button 
            style={btn}
            onClick={this.togglePersonHandler}>Toggle Persons</button>    
          {persons}
            </div>
        )
       
    } 
}

export default App;