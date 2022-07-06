import axios from "axios";
import React, { useState, useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const YouTubePage = () => {
  return (
    <div className="mainContent">
      <div className="title">
        <h1>YouTube Page </h1>
      </div>
      <div>
        <VideoPlayer />
      </div>
    </div>
  );
};

export default YouTubePage;
