import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox.js";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

function SingleColorPalette({ palette, colorId }) {
  const [format, setFormat] = useState("hex");

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    //return all shades of given color
    return shades.slice(1);
  };

  const changeFormat = (val) => {
    setFormat(val);
  };
  var _shades = gatherShades(palette, colorId);
  const { paletteName, emoji, id } = palette;

  console.log(emoji);

  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));

  return (
    <div className="SingleColorPalette Palette">
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${id}`} className="back-button">
            GO BACK
          </Link>
        </div>
      </div>

      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default SingleColorPalette;
