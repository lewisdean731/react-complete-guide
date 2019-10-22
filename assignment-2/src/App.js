import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    text: 'test',
    textLengthStatus: 'Too short!',
    textAsCharArray: 'test'
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

    this.setState( {textAsCharArray: this.state.text.split('')})
  }

  deleteCharboxHandler = ( index ) => {
    const textAsCharArray = this.state.text.split('');
    textAsCharArray.splice(index, 1);
    const newText = textAsCharArray.join('');
    this.setState({text: newText});
  }

  render() {

    const charList = this.state.text.split('').map((char, index) => {
      return <CharComponent
        char={char}
        key={index}
        clicked={() => this.deleteCharboxHandler(index)} />;
    });

    return (
      <div className="App">
        <input type="text" onChange={this.textChangeHandler}/>
        <ValidationComponent
          text={this.state.text}
          textLengthStatus={this.state.textLengthStatus}>
        </ValidationComponent>
        <div>
          {charList}
        </div>
      </div>
    );
  }
}

export default App;
