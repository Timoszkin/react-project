import React, { useState } from "react";
// import { Route, Switch } from 'react-router'
import { Routes, Route, useParams, NavLink, Link } from "react-router-dom";
import "./Header.css";
import Button from "../Button/Button";

type HeaderProp = {
  email: string;
};

function Header({ email }: HeaderProp) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let headerActions;

  function toggleLoginState(): void {
    setIsLoggedIn(!isLoggedIn);
  }

  if (isLoggedIn) {
    // если авторизован
    headerActions = (
      <div className="header__actions_auth">
        <NavLink className="header__link" to="/favourites">Favourites</NavLink>
        <NavLink className="header__link" to="/history">History</NavLink>
        <span className="header__user">{email}</span>
        <Link to="/">
          <Button text="Sign Out" funcClick={toggleLoginState}/>
        </Link>
        
      </div>
    );
  } else {
    // если не авторизован
    headerActions = (
      <div className="header__actions">
        <Link to="/signup">
          <Button text="Sign Up" funcClick={() => {console.log('signup')}}/>
        </Link>
        <Link to="/signin">
          <Button text="Sign In" funcClick={() => {console.log('signin')}}/>
        </Link>
      </div>     
    );
  }

  return (
      <header className="header">
        <div className="header__content">
            <Link to='/'><div className="header__logo">There will be Logo</div></Link>
            {headerActions}
        </div>
      </header>    
  );
}

export default Header;
