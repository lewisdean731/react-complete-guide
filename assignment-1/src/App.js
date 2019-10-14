import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: "abcdef",
    texts: [
      {content: 'Lorum ipsi dispi dolores 1'},
      {content: 'Lorum ipsi dispi dolores 2'},
      {content: 'Lorum ipsi dispi dolores 3'}
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState( {
        username: event.target.value
    } )
  }

  render() {
    return (
      <div className="App">
          <UserInput
            username={this.state.username}
            changed={this.usernameChangedHandler}>
          </UserInput>
          <UserOutput
            content={this.state.texts[0].content}
            username={this.state.username}>
          </UserOutput>
          <UserOutput
            content={this.state.texts[1].content}
            username={this.state.username}>
          </UserOutput>
      </div>
    );
  }
}

export default App;
