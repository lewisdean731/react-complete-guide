import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Lewis', age: 20},
      {name: 'John', age: 22},
      {name: 'April', age: 26}
    ],
    showPersons: true
  }

  switchNameHandler = (newName) => {
    this.setState( {
        persons: [
        {name: newName, age: 21}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
        persons: [
        {name: event.target.value, age: 21}
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {
        showPersons: !doesShow
    } )
  }

  render() {
    const style = {
      backgroundColor: '#EEEEEE',
      font: 'inherit',
      border: '1px solid blue',
      padding: '1%',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
      <button
        style={style}
        onClick={() => this.switchNameHandler('Lucy')}>Switch Name
      </button>
      <button
        style={style}
        onClick={() => this.togglePersonsHandler()}>Toggle Persons
      </button>
          <h1>Hi, I'm a React App</h1>
          {persons}
      </div>
    );
  }
}

export default App;
