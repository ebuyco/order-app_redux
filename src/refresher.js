import React, { Component } from 'react';


const name = "ernie";
const age = "28";

const printMyName = (name, age) => {
    console.log(name, age);
}

printMyName('Max', '90');

const multiply = (number) => {
    return number * 2;
}

console.log(multiply(2));

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
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {  
        name = 'Max';
        gender = 'female';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();


const numbers = [1,2,3];
const newNumbers = [...numbers, 4]

console.log(newNumbers);


const text = {
    name: 'Itlog'
}

const newText = {
    ...text,
    age:58
}

console.log(newText);

const filter = (...power) => {
    return power.filter( el => el === 1);
}
console.log(filter(1,2,3,));

const values = 3;
const values3 = values;

console.log(values3);


const name1 = {
    name: 'Renz'
};

const secondName2 = {
    ...name1

}

name1.name = "Renz2";

const data =  {
    content: "hello",
    age: 90
}

const printName = ({data}) => {
    console.log(data);
}

printName({name: "Renz", age: 90});

console.log(secondName2);

const numberFile = [1,2,3];

const doubleNumArray = numberFile.map((num) => {
        return num * 2;
});

console.log(numberFile);
console.log(doubleNumArray);

// test
class Test extends Component {
    render(){
        // return(
        //     <div className="App">
        //             <h1>{Header}</h1>
        //     </div>
        // )
        return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now'));
        return React.createElement('div', 'null', React.createElement{'h1', null, 'test like this'});
    }
}

export default App;
