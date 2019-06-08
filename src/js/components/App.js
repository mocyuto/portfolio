import React from 'react';
import Header from './Header';
import Viewport from './Viewport';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Viewport />
      </div>
    );
  }
}

export default App;