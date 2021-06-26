import NavBar from "./components/General/NavBar";
import Footer from "./components/General/Footer";

function App() {
  return (
    <>
      <NavBar />
      <h2 className="title-oferta">La oferta de la semana. Aproveche!!!!</h2>
      <hr />
      <Footer pieDePagina="Copyright @, derechos reservados Drone.Co -Junio 2021" />
    </>
  );
}

export default App;
