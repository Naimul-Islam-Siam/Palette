export default {
   Palette: {
      width: "100%",
      height: "100vh",
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column"
   },
   PaletteColors: {
      height: "90%"
   },
   goBack: {
      width: "20%",
      height: "50%",
      display: "inline-block",
      position: "relative",
      margin: "0 auto",
      cursor: "pointer",
      textTransform: "uppercase",
      marginBottom: "-3.75px",
      opacity: 1,
      backgroundColor: "black",

      "& a": {
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
         color: "white"
      }
   }
};