import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import AllOwners from "./AllOwners";
import CreateOwner from "./CreateOwner";
import EditOwner from "./EditOwner";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StartPage from "./StartPage";
import NavBar from "./NavBar";

const App = () => {
  const [pet, setJson] = useState({ status: "loading" });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7127/api/petregistry")
      .then((response) => response.json())
      .then((data) => setJson(data))
      .catch((error) => setJson({ status: "failed to load" }));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <SearchBar />
          <Routes>
            <Route path="/all" element={<AllOwners />} />
            <Route path="/create" element={<CreateOwner />} />
            <Route path="/edit" element={<EditOwner />} />
            <Route path="/" element={<StartPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
};

export default App;
