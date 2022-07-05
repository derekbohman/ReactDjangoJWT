// General Imports
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import { KEY } from "./localKey";

// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserPage from "./pages/UserPage/UserPage";
// import VideoPage from "./pages/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchResultsPage from "./pages/YouTubePage/YouTubePage";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <li>
          <ul>
            <Link to="/">YouTube Page</Link>
            <Link to="/login">Login Page</Link>
            <Link to="/register">Register Page</Link>
            <Link to="/user">User Page</Link>
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
      </Routes>
      {/* <div>
        <SearchBar />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
