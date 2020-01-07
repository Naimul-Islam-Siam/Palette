import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteSyles';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

class SingleColorPalette extends Component {
   constructor(props) {
      super(props);
      this._shades = this.gatherShades(this.props.palette, this.props.colorId);
      this.state = { format: "hex" };
      this.changeFormat = this.changeFormat.bind(this);
   }

   //return all the shades of given color
   gatherShades(palette, colorToFilterBy) {
      let shades = [];
      let allColors = palette.colors;

      for (let key in allColors) {
         shades = shades.concat(
            allColors[key].filter(color => color.id === colorToFilterBy)
         );
      }

      return shades.slice(1);
   }

   changeFormat(val) {
      this.setState({ format: val });
   }

   render() {
      const { format } = this.state;
      const { classes } = this.props;
      const { paletteName, emoji, id } = this.props.palette;

      const colorBoxes = this._shades.map(color => (
         <ColorBox
            background={color[format]}
            name={color.name}
            key={color.name}
            id={color.id}
            showingFullPalette={false}
         />
      ));

      return (
         <div className={classes.Palette}>
            <Navbar changeFormat={this.changeFormat} isSingleColor={true} />
            <div className={classes.PaletteColors}>
               {colorBoxes}
               <div className={classes.goBack}>
                  <Link to={`/palette/${id}`}>Go back</Link>
               </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
         </div>
      );
   }
};

export default withStyles(styles)(SingleColorPalette);