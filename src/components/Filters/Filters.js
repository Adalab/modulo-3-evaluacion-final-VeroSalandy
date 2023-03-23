import FilterCharacterName from './FilterCharacterName';
import FilterHouse from './FilterHouse';
import FilterGender from './FilterGender';
import PropTypes from 'prop-types';

const Filters = ({
  handleNameFilter,
  nameFilter,
  handleSelectHouseFilter,
  houseFilter,
  handleSelectGenderFilter,
  genderFilter,
  handleReset,
}) => {
  const HandleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="filter">
      <form onSubmit={HandleSubmit}>
        <FilterCharacterName
          handleNameFilter={handleNameFilter}
          nameFilter={nameFilter}
        ></FilterCharacterName>
        <FilterHouse
          handleSelectHouseFilter={handleSelectHouseFilter}
          houseFilter={houseFilter}
        ></FilterHouse>
        <FilterGender
          handleSelectGenderFilter={handleSelectGenderFilter}
          genderFilter={genderFilter}
        ></FilterGender>
        <button className="button" onClick={handleReset}>
          Reset all filters
        </button>
      </form>
    </section>
  );
};

Filters.propTypes = {
  handleNameFilter: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  handleSelectHouseFilter: PropTypes.func.isRequired,
  houseFilter: PropTypes.string.isRequired,
  handleSelectGenderFilter: PropTypes.func.isRequired,
  genderFilter: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
};
export default Filters;
