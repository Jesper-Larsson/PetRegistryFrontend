import { Link } from "react-router-dom";
import Strings from "../Strings";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="NavItem">
        <button>{Strings.homeText}</button>
      </Link>

      <Link to="/all" className="NavItem">
        <button>{Strings.showAllText}</button>
      </Link>

      <Link to="/create" className="NavItem">
        <button>{Strings.addNewText}</button>
      </Link>
    </nav>
  );
};

export default NavBar;
