import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHepler';
import PaletteList from './PaletteList';

class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;

{/* <div className="App" >
  <Palette palette={generatePalette(seedColors[3])} />
</div> */}