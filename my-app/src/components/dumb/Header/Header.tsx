import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
      <div className="header__actions_auth">
        <NavLink className="header__link" to="/favourites">
          Favourites
        </NavLink>
        <NavLink className="header__link" to="/history">
          History
        </NavLink>
        <span className="header__user">{email}</span>
        <Link to="/">
          <Button text="Sign Out" handleClick={signOut} />
        </Link>
      </div>
    );
  } else {
    // если не авторизован
    headerActions = (
      <div className="header__actions">
        <Link to="/signup">
          <Button
            text="Sign Up"
          />
        </Link>
        <Link to="/signin">
          <Button
            text="Sign In"
          />
        </Link>
      </div>
    );
  }

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <div className="header__logo">There will be Logo</div>
        </Link>
        {headerActions}
      </div>
    </header>
  );
}
