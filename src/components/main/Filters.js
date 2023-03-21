import FiltersName from "./FilstersName";
import FiltersHouse from "./FiltersHouse";

const Filters = ({ handleName, inputName, handleHouse, house }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FiltersName handleName={handleName} inputName={inputName} />
        <FiltersHouse handleHouse={handleHouse} house={house} />
      </form>
    </section>
  );
};

export default Filters;
