import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; //must be above Navbar.css
import './Navbar.css'; //must be under rc-slider/assets/index.css 

class Navbar extends Component {
   render() {
      const { level, changeLevel } = this.props
      return (
         <header className="Navbar">
            <div className="logo">
               <a heref="#">Palette</a>
            </div>

            <div className="slider-container">
               <spna>Level: {level}</spna>
               <div className="slider">
                  <Slider
                     defaultValue={level}
                     min={100} //minimum level value
                     max={900} //maximum level value
                     step={100} //interval value
                     onAfterChange={changeLevel} />
               </div>
            </div>
         </header>
      );
   }
};

export default Navbar;