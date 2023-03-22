import { Link } from 'react-router-dom';

const Character = ({ eachCharacter }) => {
  return (
    <li className="card">
      <Link to={`/character/${eachCharacter.id}`}>
        <img
          className="card__img"
          src={
            eachCharacter.image
              ? eachCharacter.image
              : `https://via.placeholder.com/210x295/FFC0CB/?text=${eachCharacter.name}`
          }
          alt={` Foto of  ${eachCharacter.name}`}
          title={`Foto of ${eachCharacter.name}`}
        ></img>
        <h4 className="card__title">{eachCharacter.name}</h4>
        <p className="card__description">{eachCharacter.species}</p>
      </Link>
    </li>
  );
};

export default Character;
