const fullVideoStyles = {
    mainContainer : {
        // height: '100vh',
        width: "100%",
        background:"#000000",
        // minHeight: {md: "100vh"}
        border: "8px solid yellow",
        // minHeight: "100vh",
        // maxHeight: "auto"
    },

    bodyContainer : {
        py: {xs: "55px", md:"25px", lg:"30px", xl:"70px"},
        marginTop: "65px",
        height: "calc(100vh - 65px)",
        border: "3px solid red",
    },

    bodyChildContainer : {
        border: "3px solid green",
        width: {xs:"95%", xl:"90%"},
        margin: "auto",
        display: "flex",
        flexDirection: {xs:"column", lg:"row"},
        justifyContent: {lg: 'space-between'},
        gap: {md: "50px", lg: '0px'}
        // height: "calc(100vh -140px -65px)"
    },

    reactPlayerContainer : {
        borderRadius: "16px",
        backgroundColor: "black",
        width: {md: "100%", lg:"62%", xl:"65%"},
        padding: '8px'
    },

    reactPlayer : {
        width: "100%",
        margin: "auto",
        height: "100px"
    },

    listofVideosContainer : {
        display: 'flex',
        flexDirection: {md:"row", lg:'column'},
        flexWrap: {md: "wrap", lg: "no-wrap"},
        gap: '10px',
        border: '4px solid pink',
        overflowY : "scroll",
        height: "517px",
        background: "black",
        justifyContent: {md: "space-between", lg: "flex-start"}
    }
}


export default fullVideoStyles