import { Box } from '@mui/material';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../navbar/Navbar';
import fullVideoStyles from './FullVideo.Styles';
import { videoObject, videosData } from "../../data/VideosData"
import SideCardVideo from '../side_card_video/SideCardVideo';
import { useTheme } from '@mui/system';

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayerReady = () => {
    // Media is loaded and ready to play
    // Set playing to true to start the playback
    // setIsMuted(false)
    setPlaying(true);
  };

  const getWindowHeight = () => {
    const windowWidth = window.innerWidth;
    // console.log('windowWidth', windowWidth)
    if (windowWidth >= 1200) {
      return '500px';
    } else if (windowWidth <= 900) {
      return '400px';
    } else if (windowWidth <= 600) {
      console.log(windowWidth)
      return '600px';
    }
  };

  const [playing, setPlaying] = useState(false);

  return (
    <Box sx={fullVideoStyles.mainContainer}>
      <Navbar />
      <Box sx={fullVideoStyles.bodyContainer}>
        <Box sx={fullVideoStyles.bodyChildContainer}>
          <Box sx={fullVideoStyles.reactPlayerContainer}>
            <ReactPlayer
              //   muted={isMuted}
              height={getWindowHeight()}
              
              width="98%"
              sx={fullVideoStyles.reactPlayer}
              url="https://www.youtube.com/watch?v=-Q81PCvItt8&list=RD-Q81PCvItt8&start_radio=1"
              controls={true}
              playing={playing}
              onReady={handlePlayerReady}
            />
          </Box>
          <Box sx={fullVideoStyles.listofVideosContainer}>
            {videosData.map(eachVideoObj => (
              <SideCardVideo key={eachVideoObj.id} eachVideoObject={eachVideoObj} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
