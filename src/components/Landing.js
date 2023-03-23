import { Link } from "react-router-dom";
import "../styles/layout/Landing.scss";
const Landing = () => {
  return (
    <section className='home'>
      <div className='home__div'>
        <img
          className='home__img'
          src='https://www.linformaldesign.com/shop/wp-content/uploads/2021/03/harry-potter-logo-416x173.png'
          alt=''
        />
      </div>
      <Link className='link' to={"/home"}>
        <i class='fa-solid fa-play fa-fade'></i>
      </Link>
    </section>
  );
};

export default Landing;
