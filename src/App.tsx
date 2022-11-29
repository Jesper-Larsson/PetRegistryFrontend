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
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <SearchBar />
          <Routes>
            <Route path="/all" element={<AllOwners />} />
            <Route path="/create" element={<CreateOwner />} />
            <Route path="/edit/:id" element={<EditOwner />} />
            <Route path="/" element={<StartPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
};

export default App;
