import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';
import { withStyles } from '@material-ui/styles';

const styles = {
   copyText: {
      color: props => chroma(props.background).luminance() >= 0.55 ? "black" : "white"
   },
   colorName: {
      color: props => chroma(props.background).luminance() <= 0.055 ? "white" : "black"
   },
   seeMore: {
      color: props => chroma(props.background).luminance() >= 0.55 ? "black" : "white",
      position: "absolute",
      right: "0px",
      bottom: "0px",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      border: "none",
      lineHeight: "30px",
      width: "60px",
      height: "30px",
      textAlign: "center",
      fontSize: "13px",
   },
   boxContent: {
      position: "absolute",
      left: "0px",
      bottom: "0px",
      padding: "10px",
      fontSize: "10px",
      letterSpacing: "1px",
      width: "100 %"
   }
}

class ColorBox extends Component {
   constructor(props) {
      super(props);
      this.state = { copied: false };

      this.changeCopy = this.changeCopy.bind(this);
   }

   changeCopy() {
      this.setState({ copied: true }, () => {
         setTimeout(() => this.setState({ copied: false }), 1500);
      })
   }

   render() {
      const { name, background, paletteId, id, showLink, classes } = this.props;
      const { copied } = this.state;
      const isDarkColor = chroma(background).luminance() <= 0.055;
      const isLightColor = chroma(background).luminance() >= 0.55;

      return (
         <CopyToClipboard text={background} onCopy={this.changeCopy}>
            <div className="ColorBox" style={{ background: background }}>
               <div className={`copy-overlay ${copied && `show`}`} style={{ background }} />
               <div className={`copy-msg ${copied && `show`}`}>
                  <h1>copied!</h1>
                  <p className={classes.copyText}>{background}</p>
               </div>
               <div className="copy-container">
                  <div className={classes.boxContent}>
                     <span className={classes.colorName}>{name}</span>
                  </div>
                  <button className={`copy-btn ${isLightColor && "dark-text"}`}>Copy</button>
               </div>

               {showLink && (
                  <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                     <span className={classes.seeMore}>MORE</span>
                  </Link>
               )}
            </div>
         </CopyToClipboard>
      );
   }
};

export default withStyles(styles)(ColorBox);