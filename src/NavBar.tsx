import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all">All</Link>
        </li>
        <li>
          <Link to="/create">Add new</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
