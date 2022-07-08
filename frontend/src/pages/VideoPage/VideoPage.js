import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { KEY } from "../../localKey";
import useVideoPush from "../../hooks/useVideoPush";
import "./VideoPage.css";

const VideoPage = (props) => {
  const [searchResults, setSearchResults] = useState([";"]);
  const [relatedSearchResults, setRelatedSearchResults] = useState([""]);
  const { handleVideoPush } = useVideoPush();
  const { videoId } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    getSearchResults();
    getRelatedSearchResults();
  }, []);

  async function getSearchResults(searchTerm) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${KEY}`
    );
    console.log(response.data.items);
    setSearchResults(response.data.items);
  }

  async function getRelatedSearchResults() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}`
    );
    console.log(response.data.items);
    setRelatedSearchResults(response.data.items);
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
      {relatedSearchResults ? (
        relatedSearchResults.map((video) => {
          if (video.snippet) {
            return (
              <div key={video.id.videoId}>
                <img
                  key={video.id.videoId}
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.tittle}
                  onClick={() => handleVideoPush(video)}
                />
                <p>{video.snippet.title}</p>
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <div>Loading...</div>
      )}
      <div className="searchBar">
        <SearchBar getSearchResults={getSearchResults} />
      </div>
    </div>
  );
};

export default VideoPage;
