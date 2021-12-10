import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setUser } from "../../store/slices/user/userSlice";
import "./AuthForm.css";
import { User } from "../../types/User";
import { ThemeContext } from "../../context/ThemeProvider";
import { loadFavs } from "../../store/slices/favorites/favoritesSlice";
import { loadHistory } from "../../store/slices/history/historySlice";
import { nanoid } from "@reduxjs/toolkit";

type AuthFormProp = {
  isLoginPage: boolean;
};

export default function AuthForm({ isLoginPage }: AuthFormProp) {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [warningField, setWarning] = useState({
    isDisplayed: false,
    warningMessage: "",
    type: "",
  });
  const navigate = useNavigate();
  const localStorageUser = localStorage.getItem("user") || "[]";

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoginPage) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  const emailOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserEmail(event.currentTarget.value);
    if (warningField.type === "e-mail") {
      setWarning({ isDisplayed: false, warningMessage: "", type: "" });
    }
  };

  const passwordOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserPassword(event.currentTarget.value);
    if (warningField.type === "password") {
      setWarning({ isDisplayed: false, warningMessage: "", type: "" });
    }
  };

  const loginSetStates = (foundUser: User) => {
    const FavsArr = foundUser.favorites.map((el) => {
      return { id: el, movie: el };
    });
    const HistArr = foundUser.history.map((el) => {
      return { id: nanoid(), query: el };
    });
    dispatch(loadHistory(HistArr));
    dispatch(loadFavs(FavsArr));
    dispatch(setUser(foundUser));
  };

  const handleLogin = () => {
    const userListString: string = localStorage.getItem("user") || "[]";
    const userList: User[] = JSON.parse(userListString);

    if (!userList.some((el) => el.email === userEmail)) {
      setWarning({
        isDisplayed: true,
        warningMessage:
          "No user with this e-mail exists. Please provide the correct e-mail or register.",
        type: "e-mail",
      });

      return;
    }

    const foundUser = userList.find(
      (el) => el.email === userEmail && el.password === userPassword
    );

    if (!foundUser) {
      setWarning({
        isDisplayed: true,
        warningMessage: "Password is incorrect!",
        type: "password",
      });

      return;
    } else {
      loginSetStates(foundUser);
      setUserEmail("");
      setUserPassword("");
      navigate("/");
    }
  };

  const handleSignUp = () => {
    if (userPassword.length < 8) {
      setWarning({
        isDisplayed: true,
        warningMessage: "Password should be at least 8 digits long!",
        type: "password",
      });
      return;
    }

    const usersInfo = JSON.stringify([
      {
        email: userEmail,
        password: userPassword,
        history: [],
        favorites: [],
        id: Number(new Date()),
      },
      ...JSON.parse(localStorageUser),
    ]);

    localStorage.setItem("user", usersInfo);
    setUserEmail("");
    setUserPassword("");
    navigate("/signin");
  };

  let submitButtonText = isLoginPage ? "Log In" : "Sign Up";
  let submitButton = (
    <button className="authForm_submitButton" type="submit">
      {submitButtonText}
    </button>
  );

  return (
    <div className="authForm_outerContainer">
      <form
        className={theme === "light" ? "authForm" : "authForm_dark"}
        onSubmit={onSubmit}
      >
        <h3>{submitButtonText}</h3>
        <div>
          <div className="authForm_input_title">Your Email:</div>
          <input
            value={userEmail}
            name="email"
            className={
              theme === "light" ? "authForm_input" : "authForm_input_dark"
            }
            type="email"
            placeholder="Email"
            onChange={emailOnChange}
            required
          />
        </div>
        <div>
          <div className="authForm_input_title">Your Password:</div>
          <input
            value={userPassword}
            name="password"
            className={
              theme === "light" ? "authForm_input" : "authForm_input_dark"
            }
            type="password"
            placeholder="Password"
            onChange={passwordOnChange}
            required
          />
        </div>
        {submitButton}
        {warningField.isDisplayed && (
          <span className="authForm_warningField">
            Warning: {warningField.warningMessage}
          </span>
        )}
        <div className="authForm_redirect">
          <span>
            {isLoginPage
              ? "Don't have an account yet? "
              : "Already have an account? "}
          </span>
          <Link to={isLoginPage ? "/signup" : "/signin"}>
            {isLoginPage ? "Sign Up" : "Log in"}
          </Link>
        </div>
      </form>
    </div>
  );
}
