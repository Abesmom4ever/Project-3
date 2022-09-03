import { useRef } from 'react';
import useVideoPlayer from './videoplayer'
import video from "../temp video/Alex Jones will hunt down the enemies of Infowars.mp4"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#d50000',
    },
    },
});

export function VideoPlayerComponent () {
 
    const videoElement = useRef(null);
    const {
      playerState,
      togglePlay,
      handleOnTimeUpdate,
      handleVideoProgress,
      handleVideoSpeed,
      toggleMute,
      VideoInfo,
    } = useVideoPlayer(videoElement);
      function SliderSizes() {
  return (
    <Box width={300}>
      <Slider 
      defaultValue={0}
      aria-label="Default"
      value={playerState.progress}
      onChange={(e) => handleVideoProgress(e)} />
    </Box>
  );
}
    return (
        <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <ThemeProvider theme={theme}>
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play"> <PlayArrowIcon/></i>
              ) : (
                <i className="bx bx-pause"><PauseIcon/></i>
              )}
            </button>
            </ThemeProvider>
          </div>
          <SliderSizes
          type="range"
          min="0"
          max="100"
          value={playerState.progress}
          onChange={(e) => handleVideoProgress(e)}
          />
          {/* <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
            
          /> */}
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className="bx bxs-volume-full"><VolumeUpIcon/></i>
            ) : (
              <i className="bx bxs-volume-mute"><VolumeOffIcon/></i>
            )}
          </button>
          {/* <input
          type="range"
          min="0"
          max="100"
          value={playerState.volume}
          onChange={(e) => handleVolumeChange(e)}
        /> */}
        </div>
      </div>
    </div>
    )
}