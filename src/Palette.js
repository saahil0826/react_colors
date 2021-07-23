import React from "react";
import ColorBox from "./ColorBox.js";
import "./Palette.css";

function Palette({ colors }) {
  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <div className="Palette-colors">
        {colors.map(color => (
          <ColorBox background={color.color} name={color.name} />
        ))}
      </div>
      {/* footer eventually */}
    </div>
  );
}

export default Palette;
