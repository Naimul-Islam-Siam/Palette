import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';


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
      const { name, background, paletteId, id } = this.props;
      const { copied } = this.state;
      const isDarkColor = chroma(background).luminance() <= 0.055;
      const isLightColor = chroma(background).luminance() >= 0.55;

      return (
         <CopyToClipboard text={background} onCopy={this.changeCopy}>
            <div className="ColorBox" style={{ background: background }}>
               <div className={`copy-overlay ${copied && `show`}`} style={{ background }} />
               <div className={`copy-msg ${copied && `show`}`}>
                  <h1>copied!</h1>
                  <p className={`${isLightColor && "dark-text"}`}>{background}</p>
               </div>
               <div className="copy-container">
                  <div className="box-content">
                     <span className={isDarkColor && "light-text"}>{name}</span>
                  </div>
                  <button className={`copy-btn ${isLightColor && "dark-text"}`}>Copy</button>
               </div>

               <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                  <span className={`see-more ${isLightColor && "dark-text"}`}>MORE</span>
               </Link>
            </div>
         </CopyToClipboard>
      );
   }
};

export default ColorBox;