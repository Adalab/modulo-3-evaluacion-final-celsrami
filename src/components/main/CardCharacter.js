import { Link } from "react-router-dom";
import "../../styles/layout/CardCharacter.scss";
const CardCharacter = ({ character }) => {
  return (
    <Link className='list__link' to={"/detail/" + character.id}>
      <li className='list__li'>
        <div className='img'>
          <img
            className='prueba'
            src={
              character.img
                ? character.img
                : "https://img.buzzfeed.com/buzzfeed-static/static/2019-04/8/15/tmp/buzzfeed-prod-web-01/tmp-name-2-4544-1554753064-5_dblbig.jpg"
            }
            alt={character.name}
          />
        </div>
        <h2 className='list__title'> {character.name}</h2>
      </li>
    </Link>
  );
};

export default CardCharacter;
