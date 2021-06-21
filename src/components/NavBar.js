import "./NavBar.css";
import logo from "../img/logo/antonio1.svg";

import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav className="nav">
      <div className="container">
        <img className="imagen-logo" src={logo} alt="logo"></img>
        <h1>Drone.Co</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contactos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
