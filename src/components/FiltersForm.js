import FilterCharacterName from './FilterCharacterName';
import FilterHouse from './FilterHouse';

const FiltersForm = ({ handleNameFilter, nameFilter }) => {
  return (
    <section className="filter">
      <form>
        <FilterCharacterName
          handleNameFilter={handleNameFilter}
          nameFilter={nameFilter}
        ></FilterCharacterName>
        <FilterHouse></FilterHouse>
      </form>
    </section>
  );
};

export default FiltersForm;
