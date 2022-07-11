// General Imports
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";

// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserPage from "./pages/UserPage/UserPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports

function App() {
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
