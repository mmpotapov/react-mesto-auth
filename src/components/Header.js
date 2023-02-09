import logo from '../images/logo.svg'
import { useState } from 'react';

function Header() {

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
      <div className={`header__mobile ${isAccountInfoOpen && "header__mobile_active"}`}>
        <p className="header__email">email@mail.com</p>
        <button className="header__button-profile">Выйти</button>
      </div>
      <div className="header__main">
        <a href="#0" className="header__logo-link">
          <img alt="Логотип" src={logo} className="header__logo" />
        </a>
        <div className={`header__account`}>
          <button
            onClick={handleButtonHideClick}
            className={`header__button-hide ${isAccountInfoOpen && "header__button-hide_active"}`}>
          </button>
          <p className="header__email">email@mail.com</p>
          <button className="header__button-profile">Выйти</button>
        </div>
      </div>
    </header>
  )
}

export default Header;


