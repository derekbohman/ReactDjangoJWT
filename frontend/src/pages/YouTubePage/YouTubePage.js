import axios from "axios";
import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";



const YouTubePage = () => {
  const [searchResults, setSearchResults] = useState([""]);

  useEffect(() => {
    getSearchResults();
  }, []);

  async function getSearchResults(searchTerm="bob ross") {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${KEY}`
    );
    console.log(response.data.items);
    setSearchResults(response.data.items);
  }

  return (
    <div>
      <h1>YouTube Page </h1>
      
    </div>
    
  );
};

export default YouTubePage;
