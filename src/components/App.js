import React, {Component} from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header
          headerMessage="React CDP 2017: Props"
        />
        <h2>Whatever it could be.. </h2>
      </div>
    );
  }
}

export default App;