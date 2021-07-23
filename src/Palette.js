import React, { useState } from "react";
import ColorBox from "./ColorBox.js";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from "rc-slider";

function Palette({ palette }) {
  const [level, setLevel] = useState(500);

  const changeLevel = level => {
    setLevel(level);
  };
  return (
    <div className="Palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>
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
