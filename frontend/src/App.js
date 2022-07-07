// General Imports
import React from "react";
import "./App.css";

// Pages Imports

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Routing from "./components/Routing/Routing";
import Footer from "./components/Footer/Footer";
// import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports

function App() {
  return (
    <div className="mainContent">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
