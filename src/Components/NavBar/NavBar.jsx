import { Link } from "react-router-dom";
import "../../styles/index.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
