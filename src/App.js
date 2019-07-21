import React from "react";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  function findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routerProps) => <PaletteList {...routerProps} palettes={seedColors} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={routerProps => (
          <Palette
            palette={generatePalette(findPalette(routerProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
