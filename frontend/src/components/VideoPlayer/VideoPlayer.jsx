import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <iframe
      title="Search Results"
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src="https://www.youtube.com/embed/lLWEXRAnQd0?autoplay=1&origin=http://example.com"
      frameborder="0"
    ></iframe>
  );
};

export default VideoPlayer;
