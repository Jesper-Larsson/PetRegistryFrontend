import { Link } from "react-router-dom";
import { useState } from "react";
import Strings from "../Strings";
import "./SearchBar.css";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  return (
    <div className="SearchBar">
      <input
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder={Strings.searchBarText}
      />
      <Link to={`/search/${searchTerm || undefined}`}>
        <button>{Strings.searchText}</button>
      </Link>
    </div>
  );
};

export default SearchBar;
