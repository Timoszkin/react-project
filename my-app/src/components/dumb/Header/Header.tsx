import React, { useState } from "react";
import "./Header.css";
import Button from "../Button/Button";

type HeaderProp = {
  email: string;
};

function Header({ email }: HeaderProp) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let headerActions;
  // const headerFavourite = <a className="header__link header__favourites" href="#">Избранное</a>;

  if (isLoggedIn) {
    // если авторизован
    headerActions = (
      <div className="header__actions_auth">
        <a className="header__link" href="#">Избранное</a>
        <a className="header__link" href="#">История</a>
        <span className="header__user">{email}</span>
        <Button text="Выйти" />
      </div>
    );
  } else {
    // если не авторизован
    headerActions = (
      <div className="header__actions">
        <Button text="Регистрация" />
        <Button text="Войти" />
      </div>
    );
  }

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">Тут будет лого</div>
        {headerActions}
      </div>
    </header>
  );
}

export default Header;
