/* IMPORT */
// import { useLocation, matchPath } from "react-router";
// import { Link, Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import { useEffect, useState } from "react";
// Importamos el servicio del local storage
// import ls from "../services/localStorage";
import callToApi from "../services/api";

// Importamos los partial
import Header from "./Header";
import Footer from "./Footer";
import ListChasracter from "./main/ListCharacter";
import Filters from "./main/Filters";

function App() {
  /* VARIABLES Y DATOS */
  const [dataFetch, setDataFetch] = useState([]);
  const [inputName, setinputName] = useState("");

  /* EFECTOS */
  useEffect(() => {
    callToApi().then((data) => {
      setDataFetch(data);
    });
  }, []);

  /* FUNCIONES HANDLER */

  const handleName = (value) => {
    setinputName(value);
  };
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  const nameFilter = dataFetch.filter((eachname) => {
    return inputName
      ? eachname.name.toLowerCase().includes(inputName.toLowerCase())
      : true;
  });
  /* HTML */

  // const { pathname } = useLocation();
  // const routeData = matchPath("product/:productId", pathname);

  // const productId = routeData !== null ? routeData.params.productId : "";

  return (
    <div className='App'>
      <Header />
      <main>
        <Filters handleName={handleName} />
        <ListChasracter dataFetch={nameFilter} inputName={inputName} />
      </main>
      <Footer />

      {/* <Routes>
        <Route path='/' element={<h2>Página de inicio</h2>} />
        <Route path='/contact' element={<h2>Página de contacto</h2>} />
      </Routes> */}
    </div>
  );
}

export default App;
