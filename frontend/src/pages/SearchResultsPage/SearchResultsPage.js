import React, { useState, useEffect } from "react";

const SearchResultsPage = (props) => {
  const FilterResults = props.items.filter(
    (item) =>
      item.id.videoId ||
      item.snippet.description ||
      item.snippet.thumbnails.default ||
      item.snippet.title
  );

  return (
    <div className="mainContent">
      <div className="searchResults">
        <h1>Search Results for {searchTerm}</h1>
        <ul>
          {FilterResults.map((item) => {
            return (
              <div>
                <li>{item.snippet.description}</li>
                <li>{item.snippet.thumbnails.default}</li>
                <li>{item.snippet.title}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchResultsPage;
