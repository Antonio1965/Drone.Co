import NavBar from "./components/General/NavBar";
import Footer from "./components/General/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar title='Drone.Co'/>
      <ItemListContainer greeting='Hola bienvenidos a todos!!!'/>
      <Footer pieDePagina="Copyright @, derechos reservados Drone.Co -Junio 2021" />
    </>
  );
}

export default App;
