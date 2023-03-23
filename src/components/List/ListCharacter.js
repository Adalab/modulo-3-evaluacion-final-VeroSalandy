import ErrorMessageCharacter from '../ErrorMessageCharacter';
import PageLoader from '../PageLoader';
import CharacterCard from './CharacterCard';

const ListCharacter = ({ characterFiltered, isLoading }) => {
  if (isLoading === true) {
    return <PageLoader></PageLoader>;
  }
  if (characterFiltered.length === 0) {
    return <ErrorMessageCharacter></ErrorMessageCharacter>;
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
