import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import AllOwners from "./AllOwners";
import CreateOwner from "./CreateOwner";
import EditOwner from "./EditOwner";

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
        <NavBar />
        <SearchBar />
        <AllOwners />
        <CreateOwner />
        <EditOwner />
      </header>
    </div>
  );
};

export default App;
