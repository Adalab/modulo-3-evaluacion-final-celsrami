const FiltersName = ({ handleName, inputName }) => {
  const hanleInputName = (ev) => {
    handleName(ev.target.value);
  };
  return (
    <label htmlFor='name'>
      ¿Quieres buscar un personaje?
      <input
        name='name'
        type='text'
        id='name'
        value={inputName}
        onChange={hanleInputName}
      ></input>
    </label>
  );
};

export default FiltersName;
