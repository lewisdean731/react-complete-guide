import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

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

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {
        showPersons: !doesShow
    } )
  }

  render() {

    let btnClass = '';
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}/>
          })}
        </div>
      );
      btnClass = classes.Red
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <button className={btnClass}
            onClick={() => this.togglePersonsHandler()}>Toggle Persons
          </button>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>Hi, I'm a React App</p>
          {persons}
        </div>
    );
  }
}

export default App;
