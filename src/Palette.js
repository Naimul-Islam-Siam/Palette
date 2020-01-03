import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './Navbar';
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
            <NavBar level={level} changeLevel={this.changeLevel} />
            {/* Color Boxes */}
            <div className="Palette-colors">
               {colorBox}
            </div>
            {/* Footer */}
         </div>
      );
   }
};

export default Palette;