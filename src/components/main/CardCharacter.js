import { Link } from "react-router-dom";

const CardCharacter = ({ character }) => {
  return (
    <Link to={"/detail/" + character.id}>
      <li>
        <h2>{character.name}</h2>
        <img
          src={
            character.img
              ? character.img
              : "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
          }
          alt={character.name}
        />
      </li>
    </Link>
  );
};

export default CardCharacter;
