// General Imports
import React from 'react';
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { KEY } from "./localKey";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserPage from "./pages/UserPage/UserPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
// import useVideoPush from "./hooks/useVideoPush";

function App() {
  // const [searchResults, setSearchResults] = useState([""]);
  // // const { handleVideoPush } = useVideoPush();

  // useEffect(() => {
  //   getSearchResults();
  // }, []);

  // async function getSearchResults(searchTerm) {
  //   let response = await axios.get(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${KEY}`
  //   );
  //   console.log(response.data.items);
  //   setSearchResults(response.data.items);
  // }

  return (
    <div className="mainContent">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="links">
        <li>
          <ul>
            <Link to="/">YouTube Page</Link>
            <Link to="/login">Login Page</Link>
            <Link to="/register">Register Page</Link>
            <Link to="/user">User Page</Link>
            <Routes>
              <Route
                exact
                path="/user"
                element={
                  <PrivateRoute>
                    <UserPage />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<YouTubePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/searchResults" element={<SearchResultsPage />} />
              <Route path="/:videoId" element={<VideoPage />} />
            </Routes>
          </ul>
        </li>
      </div>
      {/* <div className="searchBar">
        <SearchBar getSearchResults={getSearchResults} />
      </div> */}
      {/* {searchResults ? (
        searchResults.map((video) => {
          if (video.snippet) {
            return (
              <div key={video.id.videoId}>
                <img
                  key={video.id.videoId}
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.tittle}
                  onClick={() => handleVideoPush(video)}
                />
                <p>{video.snippet.title}</p>
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <div>Loading...</div>
      )} */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
