const FiltersHouse = ({ handleHouse, house }) => {
  const handleInputHause = (ev) => {
    handleHouse(ev.target.value);
  };
  return (
    <label htmlFor='house'>
      Casas de Hogwarts
      <select id='house' name='house' onChange={handleInputHause} value={house}>
        <option value='gryffindor'>Gryffindor</option>
        <option value='slytherin'>Slytherin</option>
        <option value='hufflepuff'>Hufflepuff</option>
        <option value='ravenclaw'>Ravenclaw</option>
      </select>
    </label>
  );
};

export default FiltersHouse;
