import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette.js";
import PaletteList from "./PaletteList.js";
import SingleColorPalette from "./SingleColorPalette.js";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers.js";

function App() {
  const [palettes, setPalettes] = useState(seedColors);

  const findPalette = (id) => {
    return palettes.find(function (palette) {
      return palette.id === id;
    });
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
  };


  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => (
          <NewPaletteForm savePalette={savePalette} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={palettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
}

export default App;
