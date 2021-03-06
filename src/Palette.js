import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import styles from './styles/PaletteSyles';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';

class Palette extends Component {
   constructor(props) {
      super(props);
      this.state = { level: 500, format: "hex" };
      this.changeLevel = this.changeLevel.bind(this);
      this.changeFormat = this.changeFormat.bind(this);
   }

   changeLevel(newLevel) {
      this.setState({
         level: newLevel
      })
   }

   changeFormat(val) {
      this.setState({ format: val });
   }

   render() {
      const { colors, paletteName, emoji, id } = this.props.palette;
      const { level, format } = this.state;
      const { classes } = this.props;

      const colorBox = colors[level].map(color => (
         <ColorBox
            background={color[format]}
            name={color.name}
            key={color.id}
            id={color.id}
            paletteId={id}
            showingFullPalette={true}
         />
      ));
      return (
         <div className={classes.Palette}>
            {/* NavBar */}
            <NavBar level={level}
               changeLevel={this.changeLevel}
               changeFormat={this.changeFormat}
               isSingleColor={false}
            />
            {/* Color Boxes */}
            <div className={classes.PaletteColors}>
               {colorBox}
            </div>
            {/* Footer */}
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
         </div>
      );
   }
};

export default withStyles(styles)(Palette);