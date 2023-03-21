import { Link } from "react-router-dom";

const DetailCharacter = ({ productFound }) => {
  console.log(productFound);
  return (
    <section>
      <Link to={"/"}>Volver</Link>
      <h3>{productFound.name}</h3>
      <img
        src={
          productFound.img
            ? productFound.img
            : "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
        }
        alt={productFound.name}
      />
    </section>
  );
};

export default DetailCharacter;
