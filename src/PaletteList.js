import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';

class PaletteList extends Component {
   render() {
      const { palettes, classes } = this.props;
      return (
         <div className={classes.root}>
            <div className={classes.container}>
               <nav className={classes.nav}>
                  <Link to="/" style={{ color: "white", textDecoration: "none" }} ><h1>Palette</h1></Link>
               </nav>

               <div className={classes.palettes}>
                  {palettes.map(palette => (
                     <Link to={`/palette/${palette.id}`} style={{ textDecoration: "none" }} key={palette.paletteName}>
                        <MiniPalette {...palette} />
                     </Link>
                  ))}
               </div>
            </div>
         </div >
      );
   }
};

export default withStyles(styles)(PaletteList);