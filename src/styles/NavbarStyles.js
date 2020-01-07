export default {
   Navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "7vh"
   },
   logo: {
      marginRight: "15px",
      padding: "0 13px",
      backgroundColor: "#eceff1",
      height: "100%",
      display: "flex",
      alignItems: "center",
      fontSize: "22px",
      fontFamily: "Pacifico, cursive"
   },
   slider: {
      width: "340px",
      margin: "0 10px",
      display: "inline-block",

      "& .rc-slider-track": {
         backgroundColor: "transparent",

         "&:hover": {
            cursor: "pointer"
         }
      },
      "& .rc-slider-rail": {
         height: "10px",

         "&:hover": {
            cursor: "pointer"
         }
      },

      "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
         backgroundColor: "green",
         outline: "none",
         border: "8px solid green",
         boxShadow: "none",
         width: "13px",
         height: "13px",
         marginTop: "-3px"
      }
   },
   selectContainer: {
      marginLeft: "auto",
      marginRight: "1rem"
   }
};