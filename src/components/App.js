/* SECCIÓN DE IMPORT */
import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import ListCharacter from './ListCharacter';

import FiltersForm from './FiltersForm';
import '../styles/App.scss';

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [characterListArray, setCharacterListArray] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState([]);

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    getDataApi().then((cleanData) => {
      //console.log(cleanData);
      setCharacterListArray(cleanData);
    });
  }, []);

  /* FUNCIONES HANDLER */
  const handleNameFilter = (value) => {
    setNameFilter(value);
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const characterFiltered = characterListArray.filter((eachCharacter) => {
    return eachCharacter.name
      .toLocaleLowerCase()
      .includes(nameFilter.toLocaleLowerCase());
  });

  /* HTML */
  return (
    <>
      <header className="header">
        <h1 className="App">Harry Potter</h1>
      </header>
      <main className="main">
        <FiltersForm
          handleNameFilter={handleNameFilter}
          nameFilter={nameFilter}
        ></FiltersForm>
        <ListCharacter characterListArray={characterFiltered}></ListCharacter>
      </main>
    </>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
