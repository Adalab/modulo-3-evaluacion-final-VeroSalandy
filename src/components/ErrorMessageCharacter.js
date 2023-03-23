import errorNope from '../images/error-nope-hp.gif';
const ErrorMessageCharacter = () => {
  return (
    <div className="error">
      <h2 className="error__desc">
        Error: there is no character matching the search criteria
      </h2>
      <img src={errorNope} alt="Error search criteria"></img>
    </div>
  );
};

export default ErrorMessageCharacter;
