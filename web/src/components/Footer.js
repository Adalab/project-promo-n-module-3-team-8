import logo from '../images/logo-adalab.png';
//import '../styles/layout/footer.scss';
//import '../styles/components/transanimation.scss';

const Footer = () => {
  return (
    <footer className="footer__container">
      <small className="footer__container--small">
        Awesome profile-cards &copy; 2021
      </small>
      <a
        href="https://adalab.es/"
        title="Go to the website of Adalab"
        target="_blank" rel="noreferrer"
      >
        <img
          src={logo}
          alt="Adalab logo"
          title="Adalab logo"
          className="footer__container--img"
        />
      </a>
    </footer>
  );
};

export default Footer;
