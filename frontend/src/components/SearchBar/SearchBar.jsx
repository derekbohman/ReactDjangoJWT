import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SearchResultsPage from "../../pages/SearchResultsPage/SearchResultsPage";
import "./SearchBar.css";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const [searchRequest, setSearchRequest] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchRequest);
    props.getSearchResults(searchRequest);
    navigate("/searchResults");
  };
  return (
    <form>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search YouTube"
          value={searchRequest}
          onChange={(event) => setSearchRequest(event.target.value)}
        />
        <button className="submit" onClick={handleSubmit} type="submit">
          Search
        </button>
      </div>
      <Routes>
        <Route path="/searchResults" element={<SearchResultsPage />} />
      </Routes>
    </form>
  );
};

export default SearchBar;
