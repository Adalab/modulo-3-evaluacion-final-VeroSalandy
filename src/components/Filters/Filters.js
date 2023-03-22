import FilterCharacterName from './FilterCharacterName';
import FilterHouse from './FilterHouse';
import FilterGender from './FilterGender';

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
        <button className="reset-button" onClick={handleReset}>
          Reset all filters
        </button>
      </form>
    </section>
  );
};

export default Filters;
