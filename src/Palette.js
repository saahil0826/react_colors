import React, { useState } from "react";
import ColorBox from "./ColorBox.js";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

function Palette({ palette }) {
  const { paletteName, emoji, colors, id } = palette;

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = level => {
    setLevel(level);
  };

  const changeFormat = val => {
    setFormat(val);
  };

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
         showingAllColors={true}
      />
      <div className="Palette-colors">
        {colors[level].map(color => (
          <ColorBox
            background={color[format]}
            name={color.name}
            key={color.id}
            moreUrl={`/palette/${id}/${color.id}`}
              showLink={true}
          />
        ))}
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default Palette;
