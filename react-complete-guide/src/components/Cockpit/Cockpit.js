import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

  const assignedClasses = [];

  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2){
    assignedClasses.push(classes.redText);
  }
  if (props.persons.length <= 1){
    assignedClasses.push(classes.boldText);
  }

  return (
    <div className={classes.Cockpit}>
      <button className={btnClass}
        onClick={() => props.clicked()}>Toggle Persons
      </button>
      <p className={assignedClasses.join(' ')}>Hi, I'm a React App</p>
    </div>
  );
}

export default cockpit;
