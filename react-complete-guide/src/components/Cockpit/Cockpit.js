import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // ...http request
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
  }, []);

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
      <p className={assignedClasses.join(' ')}>{props.title}</p>
    </div>
  );
}

export default cockpit;
