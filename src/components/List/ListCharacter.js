import ErrorMessageCharacter from '../ErrorMessageCharacter';
import CharacterCard from './CharacterCard';

const ListCharacter = ({ characterFiltered, nameFilter }) => {
  if (characterFiltered.length === 0) {
    return (
      <ErrorMessageCharacter nameFilter={nameFilter}></ErrorMessageCharacter>
    );
  }
  const dataHtml = characterFiltered.map((eachCharacter) => {
    return (
      <CharacterCard
        eachCharacter={eachCharacter}
        key={eachCharacter.id}
      ></CharacterCard>
    );
  });

  return (
    <section className="list">
      <ul className="cards">{dataHtml}</ul>
    </section>
  );
};

export default ListCharacter;

// if (characterFiltered.length === 0 && nameFilter !== '')
