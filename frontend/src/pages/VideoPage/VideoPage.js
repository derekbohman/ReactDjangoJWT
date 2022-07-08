import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import useVideoPush from "../../hooks/useVideoPush";
import "./VideoPage.css";

const VideoPage = (props) => {
  // const [searchResults, setSearchResults] = useState([""]);
  const [relatedSearchResults, setRelatedSearchResults] = useState([""]);
  const { handleVideoPush } = useVideoPush();
  const { videoId } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    // getSearchResults();
    getRelatedSearchResults();
  }, [videoId]);

  // async function getSearchResults(searchTerm) {
  //   let response = await axios.get(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${KEY}`
  //   );
  //   console.log(response.data.items);
  //   setSearchResults(response.data.items);
  // }

  async function getRelatedSearchResults(videoId) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=5&key=${KEY}`
    );
    console.log(response.data.items);
    setRelatedSearchResults(response.data.items);
  }

  return (
    <div className="mainContent">
      <div className="title">
        <h1>Video Page</h1>
      </div>
      <div className="videoTitle">
        <p>{state.title}</p>
      </div>
      <div className="videoPlayer">
        <VideoPlayer videoId={videoId} />
      </div>
      <div className="videoDescription">
        <p>{state.description}</p>
      </div>
      <div className="searchContent">
        {relatedSearchResults ? (
          relatedSearchResults.map((video) => {
            if (video.snippet) {
              return (
                <div className="searchResults" key={video.id.videoId}>
                  <p>{video.snippet.title}</p>
                  <img
                    key={video.id.videoId}
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    onClick={() => handleVideoPush(video)}
                  />
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default VideoPage;
