import "../styles/layout/Header.scss";
import Logo from "../images/logoHP.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={Logo} alt='Logo Harry Potter' />
      </Link>
      {/* <h1 className='header__title'>Harry potter</h1> */}
    </header>
  );
};

export default Header;
