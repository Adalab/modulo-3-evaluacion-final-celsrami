import "../../styles/layout/Filters.scss";

const FiltersName = ({ handleName, inputName }) => {
  const hanleInputName = (ev) => {
    handleName(ev.target.value);
  };
  return (
    <label className='filters__title flex' htmlFor='name'>
      ¿Quieres buscar un personaje?
      <input
        className='filters__input'
        name='name'
        type='text'
        id='name'
        placeholder='Ej: Harry Potter'
        value={inputName}
        onChange={hanleInputName}
      ></input>
    </label>
  );
};

export default FiltersName;
