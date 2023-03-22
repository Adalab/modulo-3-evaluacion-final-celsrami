import FiltersName from "./FilstersName";
import FiltersHouse from "./FiltersHouse";
import "../../styles/layout/Filters.scss";

const Filters = ({ handleName, inputName, handleHouse, house, nameFilter }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className='filters'>
      <form className='filters__form' onSubmit={handleSubmit}>
        <FiltersName handleName={handleName} inputName={inputName} />

        <FiltersHouse handleHouse={handleHouse} house={house} />
        {nameFilter.length === 0 && (
          <p className='error'>No se encontraron resultados para la búsqueda</p>
        )}
      </form>
    </section>
  );
};

export default Filters;
