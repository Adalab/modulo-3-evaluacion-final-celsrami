import { Link } from "react-router-dom";
import "../styles/layout/DetailCharacter.scss";
const DetailCharacter = ({ productFound }) => {
  return productFound ? (
    <section className='detail'>
      <Link to={"/"} className='detail__Link'>
        <i className='fa-solid fa-angles-left'></i>
      </Link>
      <article className='detail__article'>
        <h3 className='detail__title'>{productFound.name}</h3>
        <div className='detail__divImg'>
          <img
            className='detail__img'
            src={
              productFound.img
                ? productFound.img
                : "https://img.buzzfeed.com/buzzfeed-static/static/2019-04/8/15/tmp/buzzfeed-prod-web-01/tmp-name-2-4544-1554753064-5_dblbig.jpg"
            }
            alt={productFound.name}
          />
        </div>
      </article>
      <article className='detail__info'>
        <p>
          Estatus:
          {productFound.alive ? (
            <i className='fa-solid fa-heart-pulse'></i>
          ) : (
            <i className='fa-solid fa-skull'></i>
          )}
        </p>
        <p>Casa: {productFound.house}</p>

        <p>Género: {productFound.gender}</p>
        <p>Especie: {productFound.species}</p>
      </article>
    </section>
  ) : (
    <p>No se ha encontrado el personaje</p>
  );
};

export default DetailCharacter;
