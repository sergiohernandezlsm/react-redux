import React from 'react';

const Form = ({ handleSubmit, handleChange, nameInput, showName } ) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>{ showName && nameInput }</p>
      <input type="text" name="name" placeholder="example" onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}

export default Form; 