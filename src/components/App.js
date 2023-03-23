/* IMPORT */
import { useLocation, matchPath } from "react-router";
import { Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import "../styles/layout/Main.scss";
import { useEffect, useState } from "react";
// Importamos el servicio del local storage
// import ls from "../services/localStorage";
import callToApi from "../services/api";

// Importamos los partial
import Header from "./Header";
import Footer from "./Footer";
import ListChasracter from "./main/ListCharacter";
import Filters from "./main/Filters";
import DetailCharacter from "./main/DetailCharacter";
import Error404 from "./main/Error404";
import Landing from "./Landing";

function App() {
  /* VARIABLES Y DATOS */
  const [dataFetch, setDataFetch] = useState([]);
  const [inputName, setinputName] = useState("");
  const [house, setHouse] = useState("gryffindor");

  /* EFECTOS */
  useEffect(() => {
    callToApi(house).then((data) => {
      setDataFetch(data);
    });
  }, [house]);

  /* FUNCIONES HANDLER */

  const handleName = (value) => {
    setinputName(value);
  };

  const handleHouse = (value) => {
    setHouse(value);
  };
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  const nameFilter = dataFetch.filter((eachname) => {
    return inputName
      ? eachname.name.toLowerCase().includes(inputName.toLowerCase())
      : true;
  });

  const buttonReset = (valuehouse, valuename) => {
    setHouse(valuehouse);
    setinputName(valuename);
  };
  /* HTML */

  const { pathname } = useLocation();
  const routeData = matchPath("detail/:id", pathname);
  const characterId = routeData === null ? null : routeData.params.id;
  const characterFound = dataFetch.find((obj) => obj.id === characterId);

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/home'
            element={
              <>
                <Filters
                  nameFilter={nameFilter}
                  handleName={handleName}
                  inputName={inputName}
                  handleHouse={handleHouse}
                  house={house}
                  buttonReset={buttonReset}
                />

                <ListChasracter dataFetch={nameFilter} inputName={inputName} />
              </>
            }
          />
          <Route
            path='/detail/:id'
            element={<DetailCharacter characterFound={characterFound} />}
          />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
