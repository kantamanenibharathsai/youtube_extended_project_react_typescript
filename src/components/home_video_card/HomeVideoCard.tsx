import { Box, Stack, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {videosData, videoObject} from "../../data/VideosData";
import { currentVideo } from "../../redux/features/Slice";
import homeVideoCardStyles from "./HomeVideoCard.Styles";


interface Props {
    eachVideoObject : videoObject
}

const HomeVideoCard: React.FC<Props> = ({eachVideoObject}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
          <Box
            sx={homeVideoCardStyles.homeVideocardContainer}
            onClick={() => {
              navigate("/video-page");
              dispatch(currentVideo(eachVideoObject.videoUrl));
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "73%",
              }}
            >
              <Box
                component={"img"}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
                src={eachVideoObject.thumbnailUrl}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  bgcolor: "black",
                  px: 1,
                }}
              >
                {eachVideoObject.duration}
              </Typography>
            </Box>
            <Stack
              direction={"row"}
              gap={1}
              sx={{
                height: "27%",
                pl: 1,
                pt: 0.5,
                alignItems: "start",
              }}
            >
              <Stack direction={"column"}>
                <Typography variant="h6">{eachVideoObject.title}</Typography>
                <Typography>{eachVideoObject.author}</Typography>
                <Stack>
                  <Typography>{eachVideoObject.views}</Typography>
                  <Typography>{eachVideoObject.uploadTime}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
   
    );
  }
  
  export default HomeVideoCard;