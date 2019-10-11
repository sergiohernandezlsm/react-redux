import React, { Component } from 'react';
import AddedNumber from './AddedNumber';
import Form from './Form';

class DisplayApp extends Component{

  state = {
    number: 0,
    name: '',
    submitedName: '',
    showName: false
  }

  handleNumber = (x) => {
    this.setState({number: this.state.number + x})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showName: true,
      submitedName: this.state.name
    });
  }
  
  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <h3>Added Number</h3>
        <AddedNumber 
          number={this.state.number}
          handleNumber={this.handleNumber}
        />
        <h3>Form</h3>
        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          nameInput={this.state.submitedName}
          showName={this.state.showName}
        />
      </div>
    )
  }
}

export default DisplayApp;