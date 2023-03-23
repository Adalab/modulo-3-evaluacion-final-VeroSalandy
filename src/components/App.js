/* SECCIÓN DE IMPORT */
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import getDataApi from '../services/api';
import ListCharacter from './List/ListCharacter';
import Filters from './Filters/Filters';
import Error404 from './Error404';

import CharacterDetail from './CharacterDetail';

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [characterListArray, setCharacterListArray] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('gryffindor');
  const [genderFilter, setGenderFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    getDataApi(houseFilter).then((cleanData) => {
      //console.log(cleanData);
      setCharacterListArray(cleanData);
      setIsLoading(false);
    });
  }, [houseFilter]);

  /* FUNCIONES HANDLER */
  const handleNameFilter = (value) => {
    setNameFilter(value);
  };

  const handleSelectHouseFilter = (value) => {
    setHouseFilter(value);
  };

  const handleSelectGenderFilter = (value) => {
    setGenderFilter(value);
  };

  const handleReset = () => {
    setNameFilter('');
    setHouseFilter('gryffindor');
    setGenderFilter('all');
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  let characterFiltered = characterListArray

    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLocaleLowerCase()
        .includes(nameFilter.toLocaleLowerCase());
    })
    .filter((eachPerson) => {
      return genderFilter === 'all' ? true : eachPerson.gender === genderFilter;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const { pathname } = useLocation();
  const dataUrl = matchPath('/character/:id', pathname);
  const characterId = dataUrl !== null ? dataUrl.params.id : null;
  const characterFind = characterFiltered.find(
    (eachCharacter) => eachCharacter.id === characterId
  );

  /* HTML */
  return (
    <>
      <header className="header"></header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleNameFilter={handleNameFilter}
                  nameFilter={nameFilter}
                  handleSelectHouseFilter={handleSelectHouseFilter}
                  houseFilter={houseFilter}
                  handleSelectGenderFilter={handleSelectGenderFilter}
                  genderFilter={genderFilter}
                  handleReset={handleReset}
                ></Filters>
                <ListCharacter
                  characterFiltered={characterFiltered}
                  isLoading={isLoading}
                ></ListCharacter>
              </>
            }
          ></Route>
          <Route
            path="/character/:id"
            element={
              <CharacterDetail
                characterFind={characterFind}
                isLoading={isLoading}
              ></CharacterDetail>
            }
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </main>
    </>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
