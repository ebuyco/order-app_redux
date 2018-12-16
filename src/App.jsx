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
         otherState: 'some other value'
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

    render(){
        return(
            <div className="App">
            <h1 style={{textAlign: "center"}}>{Header}</h1>
            <button onClick={this.switchNameHandler}>Switch Name</button>
             <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
             <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>      
            </div>
        )
       
    } 
}

export default App;