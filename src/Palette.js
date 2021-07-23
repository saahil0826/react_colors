import React, { useState } from "react";
import ColorBox from "./ColorBox.js";
import Navbar from "./Navbar";
import "./Palette.css";

function Palette({ palette }) {
  const [level, setLevel] = useState(500);

  const changeLevel = level => {
    setLevel(level);
  };
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />
      <div className="Palette-colors">
        {palette.colors[level].map(color => (
          <ColorBox background={color.hex} name={color.name} />
        ))}
      </div>
      {/* footer eventually */}
    </div>
  );
}

export default Palette;
