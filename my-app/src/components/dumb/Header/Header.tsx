import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { connect } from 'react-redux'
import { RootState } from "../../../app/store";

type HeaderProp = {
  email: string;
};

function Header({ email }: HeaderProp) {
  let headerActions;
  if (email.length > 1) {
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

const mapStateToProps = (state: RootState) => {
  return {
    email: state.userSlice.email
  }
}

export default connect(mapStateToProps)(Header);
