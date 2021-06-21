import "./App.css";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Contactos } from "./components/Contactos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Footer pieDePagina="Copyright @, derechos reservados Drone.Co -Junio 2021" />
    </>
  );
}

export default App;
