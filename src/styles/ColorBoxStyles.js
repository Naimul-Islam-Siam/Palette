import chroma from 'chroma-js';

export default {
   colorBox: {
      width: "20%",
      height: props => props.showingFullPalette ? "25%" : "50%",
      display: "inline-block",
      position: "relative",
      margin: "0 auto",
      cursor: "pointer",
      textTransform: "uppercase",
      marginBottom: "-3.75px",

      "&:hover button": {
         opacity: 1
      }
   },
   copyText: {
      color: props => chroma(props.background).luminance() >= 0.55 ? "black" : "white"
   },
   colorName: {
      color: props => chroma(props.background).luminance() <= 0.055 ? "white" : "black"
   },
   seeMore: {
      color: props => chroma(props.background).luminance() >= 0.55 ? "rgba(0,0,0,0.6)" : "white",
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
   copyButton: {
      color: props => chroma(props.background).luminance() >= 0.55 ? "rgba(0,0,0,0.6)" : "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      outline: "none",
      border: "none",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      transition: "0.5s ease",
      cursor: "pointer",
      textDecoration: "none",
      opacity: 0
   },
   boxContent: {
      position: "absolute",
      left: "0px",
      bottom: "0px",
      padding: "10px",
      fontSize: "10px",
      letterSpacing: "1px",
      width: "100 %"
   },
   copyOverlay: {
      height: "100%",
      width: "100%",
      opacity: "0",
      zIndex: "0",
      transform: "scale(0.1)"
   },
   showOverlay: {
      transform: "scale(50)",
      opacity: "1",
      zIndex: "10",
      position: "absolute",
      transition: "transform 0.6s ease-in-out"
   },
   copyMessage: {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color: "white",
      transform: "scale(0.1)",
      opacity: "0",

      "& h1": {
         fontSize: "4rem",
         fontWeight: "400",
         textShadow: "1px 2px black",
         background: "rgba(255, 255, 255, 0.2)",
         width: "100%",
         textAlign: "center",
         padding: "1rem",
         marginBottom: "0"
      },

      "& p": {
         fontSize: "1.5rem",
         fontWeight: "100",
         opacity: "0.7",
         textTransform: "uppercase"
      }
   },
   showMessage: {
      opacity: "1",
      transform: "scale(1)",
      zIndex: "25",
      transition: "all 0.4s ease-in-out",
      transitionDelay: "0.3s"
   }
}