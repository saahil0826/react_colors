import React from "react";
import MiniPalette from "./MiniPalette.js";
import { Link } from "react-router-dom";

function PaletteList({ palettes }) {
  return (
    <div>
    <MiniPalette />
      <h1>React Colors</h1>
      {palettes.map(palette => (
        <MiniPalette {...palette} />
      ))}
    </div>
  );
}

export default PaletteList;
