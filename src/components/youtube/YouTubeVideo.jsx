import React from 'react'
import YouTube from 'react-youtube';
function YouTubeVideo() {
    const opts = {
        height: '390',
        width: '640',
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