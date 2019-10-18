import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {
  state = {
    text: 'test',
    textLengthStatus: 'Too short!'
  }

  textChangeHandler = ( event ) => {
    this.setState( {text: event.target.value} );

    if( this.state.text.length < 5 ) {
      this.setState( {textLengthStatus: 'Too short!'} );
    }
    else if( this.state.text.length > 5 ) {
      this.setState( {textLengthStatus: 'Too long!'} );
    }
    else {
      this.setState( {textLengthStatus: 'Just right!'} );
    }
  }

  render() {

    return (
      <div className="App">
        <input type="text" onChange={this.textChangeHandler}/>
        <ValidationComponent
          text={this.state.text}>
        </ValidationComponent>
      </div>
    );
  }
}

export default App;
