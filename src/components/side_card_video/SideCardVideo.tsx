import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { videosData, videoObject } from "../../data/VideosData";
import { currentVideo } from "../../redux/features/Slice";
import  sideVideoCardStyles from "./SideCardVideo.Styles";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

interface Props {
  eachVideoObject: videoObject
}

const SideCardVideo: React.FC<Props> = ({ eachVideoObject }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMoreVertIconDisplayed, setIsMoreVertIconDisplayed] = useState(false)
  return (
    <Box
      sx={sideVideoCardStyles.sideVideoCardContainer}
      onClick={() => {
        navigate("/videoplayer");
        dispatch(currentVideo(eachVideoObject.videoUrl));
      }}
      onMouseEnter = {() => {setIsMoreVertIconDisplayed(true)}}
      onMouseLeave = {() => {setIsMoreVertIconDisplayed(false)}}
    >
      <Box
        sx={sideVideoCardStyles.thumbnailContainer}
      >
        <Box
          component={"img"}
          sx={sideVideoCardStyles.thubmnailImage}
          src={eachVideoObject.thumbnailUrl}
        />
        <Typography
          sx={sideVideoCardStyles.duration}
        >
          {eachVideoObject.duration}
        </Typography>
      </Box>
      <Stack
        direction={"row"}
        gap={1}
        sx={sideVideoCardStyles.stackContainer}
      >
        <Box sx={sideVideoCardStyles.videoContentContainer}>
          <Box sx={sideVideoCardStyles.videoContentLeftContainer}>  
          <Typography sx={sideVideoCardStyles.title}>{eachVideoObject.title}</Typography>
          <Typography sx={sideVideoCardStyles.author}>{eachVideoObject.author}</Typography>
          <Box sx={sideVideoCardStyles.viewsTimeContainer}>
          <Typography sx={sideVideoCardStyles.views}>{eachVideoObject.views} views . </Typography>
          <Typography sx={sideVideoCardStyles.uploadTime}> {eachVideoObject.uploadTime}</Typography>
          </Box>
          </Box>
          <MoreVertIcon sx={{...sideVideoCardStyles.moreVertIcon, visibility : isMoreVertIconDisplayed ? "visible" : 'hidden'}}/>
        </Box>
      </Stack>

    </Box>

  );
}

export default SideCardVideo;