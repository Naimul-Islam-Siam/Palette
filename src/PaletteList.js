import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
   root: {
      backgroundColor: "#6355df",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start"
   },
   container: {
      width: "50%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap"
   },
   nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      color: "white",
      fontFamily: "Pacifico, cursive"
   },
   palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "5%"
   }
}

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