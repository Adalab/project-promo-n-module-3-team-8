import logoAwesome from '../images/logo-awesome-profile-cards.svg';
//import '../styles/layout/header.scss';
//import '../styles/layout/header-cards.scss';

const Header = () => {
  return (
    <header className="header__cards">
      <a href="./index.html">
        <img
          src={logoAwesome}
          alt="Logo awesome"
          title="Logo"
          className="header__cards--logo"
        />
      </a>
    </header>
  );
};

export default Header;
