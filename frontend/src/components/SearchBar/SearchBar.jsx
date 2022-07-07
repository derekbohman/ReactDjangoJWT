import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SearchResultsPage from "../../pages/SearchResultsPage/SearchResultsPage";

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
      <div>
        <input
          type="text"
          placeholder="Search YouTube"
          value={searchRequest}
          onChange={(event) => setSearchRequest(event.target.value)}
        />
      </div>
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
      <Routes>
        <Route path="/searchResults" element={<SearchResultsPage />} />
      </Routes>
    </form>
  );
};

export default SearchBar;
