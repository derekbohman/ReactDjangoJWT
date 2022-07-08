import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    </form>
  );
};

export default SearchBar;
