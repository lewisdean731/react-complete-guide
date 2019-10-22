import React from 'react';

import './CharComponent.css'

const charComponent = (props) => {
  return (
    <div className="CharComponent">
      <p>{props.text}</p>
      <hr />
      <p>{props.textLengthStatus}</p>
    </div>
  );
}

export default charComponent;
