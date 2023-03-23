import { Link } from 'react-router-dom';
import Error404 from './Error404';
import PageLoader from './PageLoader';

const CharacterDetail = ({ characterFind, isLoading }) => {
  if (isLoading === true) {
    return <PageLoader></PageLoader>;
  }
  if (characterFind !== undefined) {
    return (
      <>
        <Link to="/" className="div">
          <button className="button">Back</button>
        </Link>
        <article className="card__details">
          <img
            className="card__img"
            src={
              characterFind.image
                ? characterFind.image
                : `https://via.placeholder.com/210x295/4f738e/?text=${characterFind.name}`
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
            Alternative names: {characterFind.alternateNames}
          </p>
        </article>
      </>
    );
  }
  return <Error404></Error404>;
};

export default CharacterDetail;
