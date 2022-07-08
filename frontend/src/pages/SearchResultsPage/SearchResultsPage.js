import axios from "axios";
import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import useVideoPush from "../../hooks/useVideoPush";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState([""]);
  const { handleVideoPush } = useVideoPush();

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
        <h1>Search Results</h1>
      </div>
      <div className="searchBar">
        <SearchBar getSearchResults={getSearchResults} />
      </div>
      {searchResults ? (
        searchResults.map((video) => {
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
    </div>
  );
};

export default SearchResultsPage;
