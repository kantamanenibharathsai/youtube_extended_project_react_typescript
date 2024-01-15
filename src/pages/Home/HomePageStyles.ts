const homePageStyles = {
  homeChildContainer: {
    border: "3px solid red",
    background : "#000000",
    marginTop: "63px"
  },

  homePageVideosContainer: {
    display: "grid",
    gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    flexWrap: 'wrap',
    gap: "20px",
    width: {xs:"100%", md:"calc(100% - 300px)"},
    // border: "2px solid green",
    marginLeft: "auto", 
    background: '#000000',
    paddingTop : "40px",
    px: {xs: "9px", sm: "13px"}
  },
};

export default homePageStyles;
