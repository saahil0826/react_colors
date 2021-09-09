import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBox.js";
import { withStyles } from "@material-ui/styles";

function ColorBox(props) {
  const [copied, setCopied] = useState(false);
  // const isDarkColor = chroma(background).luminance() <= 0.08;
  // const isLightColor = chroma(background).luminance() >= 0.7;

  const changeCopyState = () => {
    setCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }, [copied]);

  const { background, name, moreUrl, showingFullPalette, classes } = props;

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
         <div style={{ background }} className={classes.ColorBox}>
           <div
             style={{ background }}
             className={`${classes.copyOverlay} ${copied &&
               classes.showOverlay}`}
           />
           <div
             className={`${classes.copyMessage} ${copied &&
               classes.showMessage}`}
           >
             <h1>copied!</h1>
             <p className={classes.copyText}>{background}</p>
           </div>
           <div>
             <div className={classes.boxContent}>
               <span className={classes.colorName}>{name}</span>
             </div>
             <button className={classes.copyButton}>Copy</button>
           </div>
           {showingFullPalette && (
             <Link to={moreUrl} onClick={e => e.stopPropagation()}>
               <span className={classes.seeMore}>MORE</span>
             </Link>
           )}
         </div>
       </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
