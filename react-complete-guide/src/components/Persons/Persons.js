import React, { PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state){
    // console.log('[Persons.js] getDerivedStateFromProps');
  // }

  // componentWillReceiveProps(props) {
    // console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // componentWillUpdate() {
    // console.log('[Persons.js] componentWillUpdate', props);
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, Snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(Snapshot)
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return (
      <AuthContext.Consumer>
        {(context) => this.props.persons.map( (person, index) => {
          return(
            <Person
              key={person.id}
              click={() => this.props.clicked(index)}
              changed={(event) => this.props.changed(event, person.id)}
              name={person.name}
              age={person.age}
              isAuthenticated={this.props.isAuthenticated}/>
          );
        })}
      </AuthContext.Consumer>
    );
  }
}


export default Persons;
