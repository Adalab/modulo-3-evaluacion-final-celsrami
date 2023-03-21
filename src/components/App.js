/* IMPORT */
import { useLocation, matchPath } from "react-router";
import { Route, Routes } from "react-router-dom";
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
import DetailCharacter from "./DetailCharacter";

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

  const { pathname } = useLocation();
  const routeData = matchPath("detail/:id", pathname);
  const productId = routeData === null ? null : routeData.params.id;
  const productFound = dataFetch.find((obj) => obj.id === productId);

  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters handleName={handleName} />
                <ListChasracter dataFetch={nameFilter} inputName={inputName} />
              </>
            }
          />
          <Route
            path='/detail/:id'
            element={<DetailCharacter productFound={productFound} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
