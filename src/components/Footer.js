import "../styles/layout/Footer.scss";
import PropTypes from "prop-types";
const Footer = () => {
  return (
    <footer className='footer'>
      <p>Footer</p>
    </footer>
  );
};

Footer.propTypes = {
  prueba: PropTypes.string,
};
export default Footer;
