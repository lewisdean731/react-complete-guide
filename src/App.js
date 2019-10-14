import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'b64-1', name: 'Lewis', age: 20},
      {id: 'b64-2', name: 'John', age: 22},
      {id: 'b64-3', name: 'April', age: 26}
    ],
    showPersons: true
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons
    const persons=[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
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
