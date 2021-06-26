import "./NavBar.css";
import logo from "../../img/logo/antonio1.svg";
import Card from "../Card/Card";

function NavBar(props) {
  return (
    <nav className="nav">
      <div className="container">
        <img className="imagen-logo" src={logo} alt="logo"></img>
        <h1 className="title">{props.title}</h1>
        <ul>
          <li className="list-item">
            <a href="/">Home</a>
          </li>
          <li className="list-item">
            <a href="#">Productos</a>
          </li>
          <li className="list-item">
            <a href="#">Servicios</a>
          </li>
          <li className="list-item">
            <a href="">Contactos</a>
            <span className="navbar-card">
              <Card />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
