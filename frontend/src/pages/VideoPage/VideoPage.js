import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { KEY } from "../../localKey";

const VideoPage = (props) => {
  const [searchResults, setSearchResults] = useState([""]);
  const { videoId } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    getSearchResults();
  }, []);

  async function getSearchResults(searchTerm) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${KEY}`
    );
    console.log(response.data.items);
    setSearchResults(response.data.items);
  }

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
      <div className="searchBar">
        <SearchBar getSearchResults={getSearchResults} />
      </div>
    </div>
  );
};

export default VideoPage;
