const FilterHouse = () => {
  return (
    <>
      <h2>Filter by house</h2>
      <label className="form__label " htmlFor="house"></label>
      <select
        className="form__input-text"
        name="house"
        id="house"
        //onChange={handleChange}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin </option>
        <option value="hufflepuff">Hufflepuff </option>
        <option value="ravenclaw ">Ravenclaw </option>
      </select>
    </>
  );
};

export default FilterHouse;
