import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette.js";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteList.js";

function PaletteList(props) {
  const goToPalette = (id) => {
    props.history.push(`/palette/${id}`);
  };
  const { palettes, classes, deletePalette } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
        <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              {...palette}
              handleClick={() => goToPalette(palette.id)}
              handleDelete={deletePalette}
              key={palette.id}
              id={palette.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
