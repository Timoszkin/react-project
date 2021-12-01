import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { useDispatch } from 'react-redux'
import { resetUser } from '../../../features/user/userSlice'
import { RootState } from '../../../app/store'
import { useSelector, shallowEqual } from 'react-redux'


export default function Header() {
  const email = useSelector((state: RootState) => state.userSlice.email, shallowEqual)

  const dispatch = useDispatch();
  const signOut = ():void => {
    dispatch(resetUser())
  }
  let headerActions;
  if (email.length > 1) {
    // если авторизован
    headerActions = (
      <div className="header__actions">
        <h1 className="header__user">{email}</h1>
        <Button
          text="Выйти"
          handleClick={signOut}  
        />
      </div>
    );
  } else {
    // если не авторизован
    headerActions = (
      <div className="header__actions">
        <Button text="Регистрация"/>
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
