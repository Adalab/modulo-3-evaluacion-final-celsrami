import "../../styles/layout/Filters.scss";

const FiltersHouse = ({ handleHouse, house }) => {
  const handleInputHause = (ev) => {
    handleHouse(ev.target.value);
  };
  return (
    <label className='filters__title' htmlFor='house'>
      Casas de Hogwarts
      <select
        className='filters__select'
        id='house'
        name='house'
        onChange={handleInputHause}
        value={house}
      >
        <option className='filters__option' value='gryffindor'>
          Gryffindor
        </option>
        <option value='slytherin'>Slytherin</option>
        <option value='hufflepuff'>Hufflepuff</option>
        <option value='ravenclaw'>Ravenclaw</option>
      </select>
    </label>
  );
};

export default FiltersHouse;
