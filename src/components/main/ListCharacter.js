import CardCharacter from "./CardCharacter";

const ListChasracter = ({ dataFetch }) => {
  const renderCharacter = () => {
    return dataFetch.map((character) => {
      return <CardCharacter key={character.id} character={character} />;
    });
  };
  return <ul>{renderCharacter()}</ul>;
};

export default ListChasracter;
