import error404 from '../images/error404-min.gif';

const Error404 = () => {
  return (
    <div className="error">
      <h2 className="error__desc">Error...page not found </h2>
      <img src={error404} alt="Error 404..."></img>
    </div>
  );
};
export default Error404;
