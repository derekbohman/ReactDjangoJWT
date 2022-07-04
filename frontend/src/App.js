// General Imports
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import { KEY } from "./localKey";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import VideoPage from "./pages/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Link to="/">Home Page</Link>
      <Link to="/login">Login Page</Link>
      <Link to="/register">Register Page</Link>
      {/* <Link to="/youtube">YouTube Page</Link> */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/youtube" element={<YouTubePage />} /> */}
      </Routes>
      <Footer />
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
