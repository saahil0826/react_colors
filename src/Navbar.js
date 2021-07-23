import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

function TodoForm({level, changeLevel}) {
  return (
    <header className='Navbar'>
         <div className='logo'>
           <a href='#'>reactcolorpicker</a>
         </div>
         <div className='slider-container'>
           <span>Level: {level}</span>
           <div className='slider'>
             <Slider
               defaultValue={level}
               min={100}
               max={900}
               step={100}
               onAfterChange={changeLevel}
             />
           </div>
         </div>
       </header>
  );
}

export default TodoForm;
