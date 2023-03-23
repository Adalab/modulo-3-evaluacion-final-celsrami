import CardCharacter from "./CardCharacter";
import PropTypes from "prop-types";

const ListChasracter = ({ dataFetch }) => {
  const renderCharacter = () => {
    return dataFetch.map((character) => {
      return <CardCharacter key={character.id} character={character} />;
    });
  };
  return (
    <section>
      <ul className='list'>{renderCharacter()}</ul>
    </section>
  );
};

CardCharacter.propTypes = {
  dataFetch: PropTypes.array,
};

export default ListChasracter;
