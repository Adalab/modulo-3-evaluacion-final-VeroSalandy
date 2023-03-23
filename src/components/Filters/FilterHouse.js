import PropTypes from 'prop-types';
const FilterHouse = ({ handleSelectHouseFilter, houseFilter }) => {
  const handleChange = (ev) => {
    handleSelectHouseFilter(ev.target.value);
  };
  return (
    <fieldset>
      <h2 className="fieldset__title">Select a house</h2>
      <label className="form__label " htmlFor="house"></label>
      <select
        className="form__input-text"
        name="house"
        id="house"
        onChange={handleChange}
        value={houseFilter}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin </option>
        <option value="hufflepuff">Hufflepuff </option>
        <option value="ravenclaw ">Ravenclaw </option>
      </select>
    </fieldset>
  );
};

FilterHouse.propTypes = {
  handleSelectHouseFilter: PropTypes.func.isRequired,
  houseFilter: PropTypes.string.isRequired,
};

export default FilterHouse;
