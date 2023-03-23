import { Link } from "react-router-dom";
import "../../styles/layout/DetailCharacter.scss";

const DetailCharacter = ({ characterFound }) => {
  console.log(characterFound);
  return characterFound !== undefined ? (
    <section className='detail'>
      <Link to={"/home"} className='detail__Link'>
        <i className='fa-solid fa-angles-left'></i>
      </Link>
      <article className='detail__article'>
        <h3 className='detail__title'>{characterFound.name}</h3>
        <div className='detail__divImg'>
          <img
            className='detail__img'
            src={
              characterFound.img
                ? characterFound.img
                : "https://img.buzzfeed.com/buzzfeed-static/static/2019-04/8/15/tmp/buzzfeed-prod-web-01/tmp-name-2-4544-1554753064-5_dblbig.jpg"
            }
            alt={characterFound.name}
          />
        </div>
      </article>
      <article className='detail__info'>
        <p>
          Estatus:
          {characterFound.alive ? (
            <i className='fa-solid fa-heart-pulse'></i>
          ) : (
            <i className='fa-solid fa-skull'></i>
          )}
        </p>
        <p>Casa: {characterFound.house}</p>

        <p>Género: {characterFound.gender}</p>
        <p>Especie: {characterFound.species}</p>
        <p>
          {characterFound.alternatename.length === 0
            ? ""
            : "Nombre alternativo: " + characterFound.alternatename.join(", ")}
        </p>
      </article>
    </section>
  ) : (
    <p className='error'>No se ha encontrado el personaje</p>
  );
};

export default DetailCharacter;
