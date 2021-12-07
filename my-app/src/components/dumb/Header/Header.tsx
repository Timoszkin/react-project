import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { resetUser } from "../../../features/user/userSlice";
import { RootState } from "../../../app/store";
import { useSelector, shallowEqual } from "react-redux";
import logo from "../../../images/logo.png";
import logo_dark from "../../../images/logo_dark.png";
import { ThemeContext } from "../../../context/ThemeProvider";
import sun from "../../../images/sun.png";
import moon from "../../../images/moon.png";

export default function Header() {
  const email = useSelector(
    (state: RootState) => state.userSlice.email,
    shallowEqual
  );
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const signOut = (): void => {
    dispatch(resetUser());
  };
  const headerLinkClass = theme === 'light' ? 'header__link' : 'header__link_dark'
  const themeButton = (
    <input
          type="image"
          className="header_themeButton"
          src={theme === "light" ? moon : sun}
          onClick={toggleTheme}
          alt="theme button"
        />
  )
  let headerActions;
  if (email.length > 1) {
    // если авторизован
    console.log("email: ", email);
    headerActions = (
      <div className="header__actions_auth">
        <NavLink className= {headerLinkClass} to="/favourites">
          Favourites
        </NavLink>
        <NavLink className={headerLinkClass} to="/history">
          History
        </NavLink>
        <span className={theme === 'light' ? "header__user" : "header__user_dark"}>{email}</span>
        <Link className="header__link" to="/">
          <Button text="Sign Out" handleClick={signOut} />
        </Link>
        {themeButton}
      </div>
    );
  } else {
    // если не авторизован
    console.log("error: ", email);

    headerActions = (
      <div className="header__actions">
        <Link className="header__link" to="/signup">
          <Button text="Sign Up" />
        </Link>
        <Link className="header__link" to="/signin">
          <Button text="Sign In" />
        </Link>
        {themeButton}
      </div>
    );
  }

  return (
    <header className={theme === "light" ? "header" : "header_dark"}>
      <div className="header__content">
        <Link to="/">
          <img className="header_logo" src={theme === 'light' ? logo : logo_dark} alt="LOGO" />
        </Link>
        {headerActions}
      </div>
    </header>
  );
}
