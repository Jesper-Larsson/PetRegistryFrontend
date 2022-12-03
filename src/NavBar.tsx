import { Link } from "react-router-dom";
import Strings from "./Strings";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{Strings.homeText}</Link>
        </li>
        <li>
          <Link to="/all">{Strings.showAllText}</Link>
        </li>
        <li>
          <Link to="/create">{Strings.addNewText}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
