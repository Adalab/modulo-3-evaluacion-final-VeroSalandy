const FilterGender = ({ handleSelectGenderFilter, genderFilter }) => {
  const handleChange = (ev) => {
    handleSelectGenderFilter(ev.target.value);
  };
  return (
    <fieldset>
      <h2>Select gender</h2>
      <label className="form__label " htmlFor="gender"></label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        onChange={handleChange}
        value={genderFilter}
      >
        <option value="all">All</option>
        <option value="female">Female </option>
        <option value="male">Male </option>
        <option value="no-binary ">No binary </option>
      </select>
    </fieldset>
  );
};
export default FilterGender;
