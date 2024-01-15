import { Box } from "@mui/material";
import { videosData } from "../../data/VideosData";
import homePageStyles from "./HomePageStyles"
import Navbar from "../../components/navbar/Navbar";
import HomeVideoCard from "../../components/home_video_card/HomeVideoCard";



const Home = () => {

    return (
        <Box>
            <Navbar />
            <Box sx={homePageStyles.homeChildContainer}>
                <Box sx={homePageStyles.homePageVideosContainer}>
                    {videosData.map(eachVideoObject => (
                        <HomeVideoCard key={eachVideoObject.id} eachVideoObject={eachVideoObject} />
                    ))}
                </Box>
            </Box>
        </Box>
    )

}


export default Home