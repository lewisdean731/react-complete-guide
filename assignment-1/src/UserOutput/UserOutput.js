import React from 'react';

import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserInput">
      <p>{props.username}</p>
      <p>{props.content}</p>
    </div>
  );
}

export default userOutput;
