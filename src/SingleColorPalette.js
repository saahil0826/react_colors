import React, { useState } from "react";
import ColorBox from "./ColorBox.js";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

function SingleColorPalette({palette, colorId, paletteName, emoji}) {

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

  const changeFormat =(val) =>{
    setFormat(val);
 }
  var _shades = gatherShades(palette, colorId);


  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
    <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />

    </div>
  );
}

export default SingleColorPalette;
