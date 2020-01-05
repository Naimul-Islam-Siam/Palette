import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHepler';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Palette palette={generatePalette(seedColors[3])} />
      </div>
    );
  }
}

export default App;
