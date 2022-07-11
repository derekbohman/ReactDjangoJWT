import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { KEY } from "../localKey";

const useVideoPush = () => {
  const navigate = useNavigate();
  const [relatedSearchResults, setRelatedSearchResults] = useState([""]);
  async function getRelatedSearchResults(videoId) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=5&key=${KEY}`
    );
    console.log(response.data.items);
    setRelatedSearchResults(response.data.items);
  }

  const handleVideoPush = (video) => {
    getRelatedSearchResults(video.id.videoId);
    navigate(`/${video.id.videoId}`, {
      state: {
        title: video.snippet.title,
        description: video.snippet.description,
      },
    });
  };
  return { handleVideoPush };
};

export default useVideoPush;
