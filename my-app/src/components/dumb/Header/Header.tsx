import React, { useState } from "react";
import "./Header.css";
import Button from "../Button/Button";

type HeaderProp = {
  email: string;
};

function Header({ email }: HeaderProp) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let headerActions;
  if (isLoggedIn) {
    // если авторизован
    headerActions = (
      <div className="header__actions">
        <h1 className="header__user">{email}</h1>
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
