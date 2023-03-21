import FiltersName from "./FilstersName";

const Filters = ({ handleName, inputName }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FiltersName handleName={handleName} inputName={inputName} />
      </form>
    </section>
  );
};

export default Filters;
