import React from "react";
import ColorBox from "./ColorBox.js";

function SingleColorPalette(props) {
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

  var _shades = gatherShades(props.palette, props.colorId);

  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default SingleColorPalette;
