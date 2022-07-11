import axios from "axios";
import { KEY } from "../../localKey";
import React, { useState, useEffect } from "react";
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
      <div className="searchContent">
        {searchResults ? (
          searchResults.map((video) => {
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

export default SearchResultsPage;
