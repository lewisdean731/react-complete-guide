import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
    // console.log('[Persons.js] getDerivedStateFromProps');
  // }

  // componentWillReceiveProps(props) {
    // console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // componentWillUpdate() {
    // console.log('[Persons.js] componentWillUpdate', props);
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, Snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(Snapshot)
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map( (person, index) => {
      return(
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age}/>
      );
    });
  }
}


export default Persons;
