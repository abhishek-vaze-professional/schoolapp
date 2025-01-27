import React from 'react'
import YouTube from 'react-youtube';
import { useMediaQuery, useTheme } from "@mui/material";
function YouTubeVideo() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const videoWidth = isMatch ? '100%': '50%';
    const opts = {
        height: '390',
        width: videoWidth,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  return (
    <YouTube videoId="yDiUeRFiSkA" opts={opts} onReady={_onReady} />
  )
}

export default YouTubeVideo;