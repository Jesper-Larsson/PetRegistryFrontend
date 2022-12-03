import { Link } from "react-router-dom";
import { useState } from "react";
import Strings from "../Strings";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder={Strings.searchBarText}
      />
      <Link to={`/search/${searchTerm || undefined}`}>
        {Strings.searchText}
      </Link>
    </div>
  );
};

export default SearchBar;
