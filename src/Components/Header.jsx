import { Link } from "react-router-dom";
import "../Styles/header.scss";
const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img
          src="https://www.designfreelogoonline.com/wp-content/uploads/2018/08/0001025-music-logo-maker-online-05.png"
          alt="logo"
          className="header__link__btn header__logo__img"
        />
      </Link>

      <nav className="header__nav">
        <ul className="header__nav__ul">
          <Link to="/albums">
            <button className="header__link__btn btn_albums-publics">
              Albums publics
            </button>
          </Link>

          {/*  <Link to="/user">
            <button className="header__link__btn">Utilisateur</button>
          </Link> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
