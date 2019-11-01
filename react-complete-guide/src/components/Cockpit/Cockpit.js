import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);


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
      <button onClick={authContext.login}>
        Log in
      </button>

      <p className={assignedClasses.join(' ')}>{props.title}</p>
    </div>
  );
}

export default React.memo(cockpit);
