const FilterCharacterName = ({ handleNameFilter, nameFilter }) => {
  const handleChange = (ev) => {
    // THIS HANDLECHANGE IS TO BE ABLE TO GET VALUE WHEN SOMETHINGS CHANGES
    handleNameFilter(ev.target.value);
  };
  return (
    <fieldset>
      <h2> Search by character:</h2>
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

export default FilterCharacterName;
