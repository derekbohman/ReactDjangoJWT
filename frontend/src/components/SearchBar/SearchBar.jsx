import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    </form>
  );
};

export default SearchBar;
