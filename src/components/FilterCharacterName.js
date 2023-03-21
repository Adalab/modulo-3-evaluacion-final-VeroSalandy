const FilterCharacterName = ({ handleNameFilter, nameFilter }) => {
  const handleChange = (ev) => {
    // THIS HANDLECHANGE IS TO BE ABLE TO GET VALUE WHEN SOMETHINGS CHANGES
    handleNameFilter(ev.target.value);
  };
  return (
    <>
      <label className="label-text" htmlFor="searchCharacter">
        Search by character:
      </label>
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
    </>
  );
};

export default FilterCharacterName;
