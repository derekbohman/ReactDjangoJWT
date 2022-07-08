// General Imports
import axios from "axios";
import { KEY } from "./localKey";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";

// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserPage from "./pages/UserPage/UserPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import useVideoPush from "./hooks/useVideoPush";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";

// Util Imports

function App() {
  const [searchResults, setSearchResults] = useState([""]);
  const { handleVideoPush } = useVideoPush();

  useEffect(() => {
    getSearchResults();
  }, []);

  async function getSearchResults(searchTerm = "Bob Ross") {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${KEY}`
    );
    console.log(response.data.items);
    setSearchResults(response.data.items);
  }
  return (
    <div className="mainContent">
      <Navbar />
      <div className="links">
        <li>
          <ul>
            <Link to="/">YouTube Clone</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/user">User</Link>
          </ul>
        </li>
      </div>
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
      <div className="searchBar">
        <SearchBar getSearchResults={getSearchResults} />
      </div>
      <div className="searchContent">
        {searchResults ? (
          searchResults.map((video) => {
            if (video.snippet) {
              return (
                <div className="searchResults" key={video.id.videoId}>
                  <p>{video.snippet.title}</p>
                  <img
                    key={video.id.videoId}
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    onClick={() => handleVideoPush(video)}
                  />
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
