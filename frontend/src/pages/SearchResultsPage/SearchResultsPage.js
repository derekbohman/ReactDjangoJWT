import axios from "axios";
import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState([""]);

  useEffect(() => {
    getSearchResults();
  }, []);

  async function getSearchResults(searchTerm = "Bob Ross") {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${KEY}`
    );
    console.log(response.data);
    setSearchResults(response.data);
  }

  return (
    <div>
      <VideoPlayer searchResults={searchResults} />
      <SearchBar getSearchResults={getSearchResults} />
    </div>
  );
};

export default SearchResultsPage;
