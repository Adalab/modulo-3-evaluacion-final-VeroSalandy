import Character from './Character';

const ListCharacter = ({ characterListArray }) => {
  const dataHtml = characterListArray.map((eachCharacter) => {
    return (
      <Character
        eachCharacter={eachCharacter}
        key={eachCharacter.id}
      ></Character>
    );
  });

  return (
    <section className="list">
      <ul className="cards">{dataHtml}</ul>
    </section>
  );
};

export default ListCharacter;
