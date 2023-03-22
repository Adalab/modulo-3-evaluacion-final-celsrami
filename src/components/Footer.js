import "../styles/layout/Footer.scss";
import Logo from "../images/logoHP.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to={"/"}>
        <img className='footer__logo' src={Logo} alt='Logo Harry Potter' />
      </Link>
    </footer>
  );
};

export default Footer;
