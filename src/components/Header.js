import logo from '../images/logo.svg'
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";


function Header(props) {

  const [isAccountInfoOpen, setIsAccountInfoOpen] = useState(false);
  /** Шторка для экранов смартфонов */
  function handleButtonHideClick() {
    if (isAccountInfoOpen) {
      setIsAccountInfoOpen(false)
    } else {
      setIsAccountInfoOpen(true)
    };
  }



  return (
    <header className="header">
      {props.loggedIn && (
      <div className={`header__mobile ${isAccountInfoOpen && "header__mobile_active"}`}>
        <p className="header__email">email@mail.com</p>
        <button className="header__button-profile">Выйти</button>
      </div>)}
      <div className="header__main">
        <a href="#0" className="header__logo-link">
          <img alt="Логотип" src={logo} className="header__logo" />
        </a>
        <div className={`header__account`}>
          {props.loggedIn && (<>
            <button
              onClick={handleButtonHideClick}
              className={`header__button-hide ${isAccountInfoOpen && "header__button-hide_active"}`}>
            </button>
            <p className="header__email">email@mail.com</p>
            </>)}
          <Routes>
            <Route path="/sign-up" element={<Link className="header__button-profile header__button-profile_unauthorized" to="/sign-in">Войти</Link>} />
            <Route path="/sign-in" element={<Link className="header__button-profile header__button-profile_unauthorized" to="/sign-up">Регистрация</Link>} />
            <Route path="/" element={<Link className="header__button-profile" to="/sign-up">Выйти</Link>} />
          </Routes>
        </div>
      </div>
    </header>
  )
}

export default Header;


