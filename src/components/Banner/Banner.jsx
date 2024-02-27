import React, { useState,useRef } from "react";
import ReactHlsPlayer from "react-hls-player";
import Icon from '@mdi/react';
import { mdiVolumeOff, mdiVolumeHigh } from '@mdi/js';
import './Banner.css'

function Banner() {
  const [muted, setMuted] = useState(true);

  const videoRef = useRef(null);
  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(!muted);
    }
  };
  return (
    <div className="autoplay-banner">
      <ReactHlsPlayer
        className="video"
        src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        controls={false}
        width="100%"
        height="100%"
        autoPlay
        muted={muted}
        playerRef={videoRef}
      />
      <div className="mute-button" onClick={handleMuteToggle}>
        {muted ? (
          <Icon path={mdiVolumeOff} size={1} />
        ) : (
          <Icon path={mdiVolumeHigh} size={1} />
        )}
      </div>
    </div>
  );
}

export default Banner;
