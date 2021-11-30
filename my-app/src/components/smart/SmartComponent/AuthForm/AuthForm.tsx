import { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeProvider";
import "./AuthForm.css";

export default function AuthForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  const emailOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserEmail(event.currentTarget.value);
  };

  const passwordOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserPassword(event.currentTarget.value);
  };

  const loginSignupToggle = (event: React.FormEvent<HTMLButtonElement>) => {
    setIsLoginPage(!isLoginPage);
  };

  let submitButtonText;
  let loginSignupToggleButton;

  if (isLoginPage) {
    submitButtonText = "Log In";
    loginSignupToggleButton = "Go to register";
  } else {
    submitButtonText = "Sign Up";
    loginSignupToggleButton = "Go to Log In";
  }
  let submitButton = (
    <button className="authForm_submitButton" type="submit">
      {submitButtonText}
    </button>
  );

  return (
    <div className="authForm_outerContainer">
      <form className="authForm" onSubmit={onSubmit}>
        <h3>{submitButtonText}</h3>
        <div>
          <div className="authForm_input_title">Your Email:</div>
          <input
            name="email"
            className="authForm_input"
            type="email"
            placeholder="Email"
            onChange={emailOnChange}
            required
          />
        </div>
        <div>
          <div className="authForm_input_title">Your Password:</div>
          <input
            name="password"
            className="authForm_input"
            type="password"
            placeholder="Password"
            onChange={passwordOnChange}
            required
          />
        </div>
        {submitButton}
        <div>
          <button className="authForm_toggleButton" onClick={loginSignupToggle}>
            {loginSignupToggleButton}
          </button>
        </div>
        <div>
          <button className="authForm_toggleButton" onClick={toggleTheme}>
            Toggle background color
          </button>
        </div>
      </form>
    </div>
  );
}
