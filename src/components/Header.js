import logo from '../images/logo.svg'
import { useState } from 'react';

function Header() {

  const [isAccountInfoOpen, setIsAccountInfoOpen] = useState(false);

  /**   */
  function handleButtonHideClick() {
    if (isAccountInfoOpen) {
      setIsAccountInfoOpen(false)
    } else {
      setIsAccountInfoOpen(true)
    };
  }

  return (
    <header className="header">
      <div className="header__main">
        <a href="#0" className="header__logo-link">
          <img alt="Логотип" src={logo} className="header__logo" />
        </a>
        <button
          onClick={handleButtonHideClick}
          className={`header__button-hide ${isAccountInfoOpen && "header__button-hide_active"}`}>
        </button>
      </div>
      <div className={`header__account ${isAccountInfoOpen && "header__account_active"}`}>
        <p className="header__email">email@mail.com</p>
        <button className="header__button-exit">Выйти</button>
      </div>
    </header>
  )
}

export default Header;


