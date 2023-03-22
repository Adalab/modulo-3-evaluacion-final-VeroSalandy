import { Link } from 'react-router-dom';

const CharacterDetail = ({ characterFind }) => {
  if (characterFind !== undefined) {
    return (
      <>
        <Link to="/">
          <button>Back</button>
        </Link>
        <article className="card">
          <img
            className="card__img"
            src={
              characterFind.image
                ? characterFind.image
                : `https://via.placeholder.com/210x295/FFC0CB/?text=${characterFind.name}`
            }
            alt={` Foto of  ${characterFind.name}`}
          ></img>
          <h4 className="card__title">Name: {characterFind.name}</h4>
          <p className="card__description"> Species: {characterFind.species}</p>
          <p className="card__description">House: {characterFind.house}</p>
          <p className="card__description">
            Gender:
            {characterFind.gender === 'female' ? ' female 💃🏾' : ' male 🕺🏾'}
          </p>
          <p className="card__description">
            State:
            {characterFind.alive === true ? ' alive 💖' : ' deceased 💀'}
          </p>
          <p className="card__description">
            Alternanative Names: {characterFind.alternateNames}
          </p>
        </article>
      </>
    );
  }
};

export default CharacterDetail;
