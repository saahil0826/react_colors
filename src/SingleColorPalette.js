import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox.js";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";

function SingleColorPalette(props) {
  const { classes, palette, colorId } = props;

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

  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));
  const { paletteName, emoji, id } = palette;

  return (
    <div className={classes.Palette}>
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>GO BACK</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(SingleColorPalette);
