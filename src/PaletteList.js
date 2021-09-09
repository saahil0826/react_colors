import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette.js";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteList.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                handleClick={() => goToPalette(palette.id)}
                handleDelete={deletePalette}
                key={palette.id}
                id={palette.id}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
