export default {
   root: {
      backgroundColor: "white",
      borderRadius: "5px",
      padding: "0.5rem",
      position: "relative",
      overflow: "hidden",
      "&:hover": {
         cursor: "pointer"
      }
   },
   colors: {
      backgroundColor: "#dae1e4",
      height: "130px",
      width: "100%",
      borderRadius: "5px",
      overflow: "hidden"
   },
   title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "black",
      margin: 0,
      fontSize: "0.8rem",
      paddingTop: "0.3rem",
      position: "relative",
      fontFamily: "Roboto"
   },
   emoji: {
      marginLeft: "0.3rem",
      fontSize: "1rem"
   },
   miniColorBoxes: {
      width: "25%",
      height: "20%",
      display: "inline-block",
      margin: "0 auto",
      position: "relative",
      marginBottom: "-4px"
   }
};