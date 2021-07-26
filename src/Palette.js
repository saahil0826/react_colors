import React, { useState } from "react";
import ColorBox from "./ColorBox.js";
import Navbar from "./Navbar";
import "./Palette.css";

function Palette({ palette }) {
  var paletteName = palette.paletteName;
  var emoji = palette.emoji;
  var colors = palette.colors;

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
      />
      <div className="Palette-colors">
        {colors[level].map(color => (
          <ColorBox
            background={color[format]}
            name={color.name}
            key={color.id}
          />
        ))}
      </div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
}

export default Palette;
