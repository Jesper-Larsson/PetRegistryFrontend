import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import AllOwners from "../AllOwners/AllOwners";
import CreateOwner from "../CreateOwner/CreateOwner";
import EditOwner from "../EditOwner/EditOwner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "../StartPage/StartPage";
import NavBar from "../NavBar/NavBar";
import SearcResults from "../AllOwners/SearchResults";

const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar />
          <SearchBar />
        </header>
        <Routes>
          <Route path="/all" element={<AllOwners />} />
          <Route path="/create" element={<CreateOwner />} />
          <Route path="/edit/:id" element={<EditOwner />} />
          <Route path="/search/:searchTerm" element={<SearcResults />} />
          <Route path="/" element={<StartPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
