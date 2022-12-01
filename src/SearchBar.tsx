import { Link } from "react-router-dom";
import { useState } from "react";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search for owner och pet"
      />
      <Link to={`/search/${searchTerm}`}>Search</Link>
    </div>
  );
};

export default SearchBar;
