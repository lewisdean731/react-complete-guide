import React from 'react';

import './ValidationComponent.css'

const validationComponent = (props) => {
  return (
    <div className="ValidationComponent">
      <p>{props.text}</p>
      <hr />
      <p>{props.textLengthStatus}</p>
    </div>
  );
}

export default validationComponent;
