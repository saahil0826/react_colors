import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette.js";
import PaletteList from "./PaletteList.js";
import SingleColorPalette from "./SingleColorPalette.js";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers.js";

function App() {

  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes|| seedColors);

   useEffect(() => {
     window.localStorage.setItem("palettes", JSON.stringify(palettes));
   }, [palettes]);

  const findPalette = (id) => {
    return palettes.find(function (palette) {
      return palette.id === id;
    });
  };

  const deletePalette = (id) => {
    const removedPalette = palettes.filter((palette) => palette.id !== id);
    setPalettes(removedPalette);
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => (
          <NewPaletteForm
            savePalette={savePalette}
            palettes={palettes}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={palettes} deletePalette={deletePalette} {...routeProps} />
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
      <Route
        render={(routeProps) => (
          <PaletteList palettes={palettes} deletePalette={deletePalette} {...routeProps} />
        )}
      />
    </Switch>
  );
}

export default App;
