import React from 'react';

const AddedNumber = ({ number, handleNumber }) => {
  return (
    <div>
      <h1>{ number }</h1>
      <button onClick={() => handleNumber(1)}>Up</button>
      <button onClick={() => handleNumber(-1)}>Down</button> 
    </div>
  )
}

export default AddedNumber;
