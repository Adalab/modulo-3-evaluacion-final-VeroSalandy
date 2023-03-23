import PropTypes from 'prop-types';

const FilterCharacterName = ({ handleNameFilter, nameFilter }) => {
  const handleChange = (ev) => {
    handleNameFilter(ev.target.value);
  };
  return (
    <fieldset className="fieldset">
      <h2 className="fieldset__title"> Search by character:</h2>
      <label className="label-text" htmlFor="searchCharacter"></label>
      <input
        className="header__search"
        autoComplete="off"
        type="search"
        name="search"
        placeholder="example: Harry"
        onChange={handleChange}
        value={nameFilter}
        id="searchCharacter"
      />
    </fieldset>
  );
};

FilterCharacterName.propTypes = {
  handleNameFilter: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
};

export default FilterCharacterName;
