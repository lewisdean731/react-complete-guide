import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // ...http request
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // ...http request
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  const assignedClasses = [];

  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2){
    assignedClasses.push(classes.redText);
  }
  if (props.personsLength <= 1){
    assignedClasses.push(classes.boldText);
  }

  return (
    <div className={classes.Cockpit}>
      <button
        className={btnClass}
        onClick={() => props.clicked()}
        ref={toggleButtonRef}>
        Toggle Persons
      </button>
      <button
        onClick={props.login}>
        Log in
      </button>
      <p className={assignedClasses.join(' ')}>{props.title}</p>
    </div>
  );
}

export default React.memo(cockpit);
