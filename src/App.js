import React, { Component } from "react";
import Palette from "./Palette.js";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers.js";


class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
