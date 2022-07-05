import axios from "axios";
import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState([""]);

  useEffect(() => {
    getSearchResults();
  }, []);

  async function getSearchResults(searchTerm) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${KEY}`
    );
    console.log(response.data);
    setSearchResults(response.data);
  }

  return (
    <div>
      <div>
        <ul>
          <li>

          </li>
        </ul>
      </div>
      <div>
        <SearchBar getSearchResults={getSearchResults} />
        
      </div>
    </div>
  );
};

export default SearchResultsPage;
