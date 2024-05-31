import { Link } from "react-router-dom";
import "../../styles/index.css";
import Logo from "../../assets/logo.png";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h1>Oceans Project</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="geral">Oceano para todos</Link>
          </li>
          <li>
            <Link to="empresarial">Sustentabilidade Corporativa</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
