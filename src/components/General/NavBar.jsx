import "./NavBar.css";
import logo from "../../img/logo/antonio1.svg";

function NavBar() {
  return (
    <nav className="nav">
      <div className="container">
        <img className="imagen-logo" src={logo} alt="logo"></img>
        <h1 className='title'>Drone.Co</h1>
        <ul>
          <li className='list-item'>
            <a href="/">Home</a>
          </li >
          <li className='list-item'>
            <a href="#">Productos</a>
          </li>
          <li className='list-item'>
            <a href="#">Servicios</a>
          </li>
          <li className='list-item'>
            <a href="">Contactos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
