import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PaletteList extends Component {
   render() {
      const { palettes } = this.props;
      return (
         <div>
            <h1>React Colors</h1>
            {palettes.map(palette => (
               <h2><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></h2>
            ))}
         </div>
      );
   }
};

export default PaletteList;