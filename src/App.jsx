import React, { Component } from 'react';


const name = "ernie";
const age = "28";

const printMyName = (name, age) => {
    console.log(name, age);
}

printMyName('Max', '90');


 class App extends Component{
    state ={
        water: "ernie"
    }
  
    render(){
        return(
            <div className="App">
                <h1 className="App-title">{name}</h1>
                <h1 className="App-Age">{age}</h1>
                <h2 className="App-title">{this.state.water}</h2>
            </div>
        )
    }
}

class Human {
    constructor() {
        this.gender = 'male';
    }

    printMyGender(){
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Max';
        this.gender = 'female'

    }

    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();





export default App;
