export default {
   root: {
      backgroundColor: "#6355df",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      overflowY: "scroll"
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
};