import { useEffect, useState } from "react";

import menuIcon from "../assets/clipart3518256.png";
import { Link } from "react-router-dom";
import MenuBurgerCloseSVG from "../assets/pngfind.com-christian-cross-png-2532502.png";
import MenuBurgerOpenSVG from "../assets/clipart3518256.png";
import "../Styles/header.scss";

console.log(menuIcon);
const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = (e) => {
    e.preventDefault();
    setMenuIsOpen(!menuIsOpen);
  };
  const closeMenu = (e) => {
    setMenuIsOpen(false);
  };
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img
          src="https://www.designfreelogoonline.com/wp-content/uploads/2018/08/0001025-music-logo-maker-online-05.png"
          alt="logo"
          className="header__link__btn header__logo__img"
        />
      </Link>

      <nav
        className={"header__nav__mobile" + (menuIsOpen ? "--open" : "") + ""}
      >
        <div className="header__nav__mobile__div">
          <ul className="header__nav__mobile__ul">
            <div>
              <button className="header__btn-menu" onClick={handleMenu}>
                <img src={MenuBurgerCloseSVG} alt="" />
              </button>
            </div>

            <Link to="/albums" className="test" onClick={closeMenu}>
              <button className="header__link__btn btn_albums-publics">
                Albums publics
              </button>
            </Link>
            {!isLogged ? (
              <span className="header__link__btn_connection">
                <Link to="/signup" onClick={closeMenu}>
                  <button className="header__link__btn btn_signup">
                    Nouveau compte
                  </button>
                </Link>
                <Link to="/signin" onClick={closeMenu}>
                  <button className="header__link__btn btn_signin">
                    Connexion au compte
                  </button>
                </Link>
              </span>
            ) : (
              <Link to="/user/:id">
                <button className="header__link__btn btn_albums-publics">
                  Mon espace
                </button>
              </Link>
            )}
          </ul>
        </div>
      </nav>
      {/* navigation desktop */}
      <nav className="header__nav__desktop">
        <ul className="header__nav__desktop__ul">
          <Link to="/albums">
            <button className="header__link__btn btn_albums-publics">
              Albums publics
            </button>
          </Link>
          {!isLogged ? (
            <span>
              <Link to="/signup">
                <button className="header__link__btn btn_signup">
                  Nouveau compte
                </button>
              </Link>
              <Link to="/signin">
                <button className="header__link__btn btn_signin">
                  Connexion au compte
                </button>
              </Link>
            </span>
          ) : (
            <Link to="/user/:id">
              <button className="header__link__btn btn_albums-publics">
                Mon espace
              </button>
            </Link>
          )}
        </ul>
      </nav>

      <div className="burger_btn">
        <button className="header__btn-menu" onClick={handleMenu}>
          {menuIsOpen ? (
            <img src={MenuBurgerCloseSVG} alt="" />
          ) : (
            <img src={MenuBurgerOpenSVG} alt="" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
