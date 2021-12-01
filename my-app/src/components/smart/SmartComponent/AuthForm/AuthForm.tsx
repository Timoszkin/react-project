import { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";

type AuthFormProp = {
  isSigninPage: boolean;
};

export default function AuthForm({ isSigninPage }: AuthFormProp) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

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

  let submitButtonText = isSigninPage ? "Sign In" : "Sign Up";

  let submitButton = (
    <Link to="/">
      <button className="authForm_submitButton" type="submit">
        {submitButtonText}
      </button>
    </Link>
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
      </form>
    </div>
  );
}
