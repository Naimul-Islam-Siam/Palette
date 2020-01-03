import React, { Component } from 'react';
import Slider from 'rc-slider';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css';

class Palette extends Component {
   constructor(props) {
      super(props);
      this.state = { level: 500 }
      this.changeLevel = this.changeLevel.bind(this);
   }

   changeLevel(newLevel) {
      this.setState({
         level: newLevel
      })
   }

   render() {
      const { colors } = this.props.palette;
      const { level } = this.state;

      const colorBox = colors[level].map(color => (
         <ColorBox background={color.hex} name={color.name} />
      ));
      return (
         <div className="Palette">
            {/* NavBar */}
            <Slider
               defaultValue={level}
               min={100} //minimum level value
               max={900} //maximum level value
               step={100} //interval value
               onAfterChange={this.changeLevel} />
            <div className="Palette-colors">
               {colorBox}
            </div>
            {/* Footer */}
         </div>
      );
   }
};

export default Palette;