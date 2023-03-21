const getDataApi = () => {
  const url = 'https://hp-api.onrender.com/api/characters/house/gryffindor';
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
          gender: eachCharacter.gender,
          house: eachCharacter.house,
          alive: eachCharacter.alive,
          alternateNames: eachCharacter.alternate_names,
          //alternateNames: eachCharacter.alternate_names.length,
          id: eachCharacter.id,
        };
      });
      return cleanData;
    });
};

export default getDataApi;

// const getDataApi = () => {
//   const url = `https://hp-api.onrender.com/api/characters/house/${inputSelect.value}`;
//   const inputSelect = ev.target.value;
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       if (inputSelect.value === 'gryffindor') {
//       }
//       const cleanData = data.map((eachCharacter) => {
//         return {
//           image: eachCharacter.image,
//           name: eachCharacter.name,
//           species: eachCharacter.species,
//           gender: eachCharacter.gender,
//           house: eachCharacter.house,
//           alive: eachCharacter.alive,
//           alternateNames: eachCharacter.alternate_names,
//           //alternateNames: eachCharacter.alternate_names.length,
//           id: eachCharacter.id,
//         };
//       });
//       return cleanData;
//     });
// };

// export default getDataApi;
