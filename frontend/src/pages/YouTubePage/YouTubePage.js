import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import SearchBar from "../../components/SearchBar/SearchBar";

const YouTubePage = () => {
  const [searchResults, setSearchResults] = useState([""]);

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
        <h1>YouTube Page </h1>
      </div>
      <div className="searchBar">
        <SearchBar getSearchResults={getSearchResults} />
      </div>
    </div>
  );
};

export default YouTubePage;
