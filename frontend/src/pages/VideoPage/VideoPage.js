import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const { state } = useLocation();
  return (
    <div className="mainContent">
      <div className="title">
        <h1>Welcome to the Video Page</h1>
      </div>
      <p>Title: {state.title}</p>
      <div className="videoPlayer">
        <VideoPlayer videoId={videoId} />
      </div>
      <p>description: {state.description}</p>
    </div>
  );
};

export default VideoPage;
