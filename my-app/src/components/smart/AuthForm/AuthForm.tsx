import { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setUser } from "../../../features/user/userSlice";
import "./AuthForm.css";
import { User } from "../../../types/User";
import { ThemeContext } from "../../../context/ThemeProvider";

type AuthFormProp = {
  isLoginPage: boolean;
};

export default function AuthForm({ isLoginPage }: AuthFormProp) {
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [warningField, setWarning] = useState({
    isDisplayed: false,
    warningMessage: '',
    type: ''
  })
  const navigate = useNavigate();
  const localStorageUser = localStorage.getItem('user') || '[]';
  
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
    if (warningField.type === 'e-mail') {
      setWarning({ isDisplayed: false, warningMessage: '', type: '' })
    }
  };

  const passwordOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserPassword(event.currentTarget.value);
    if (warningField.type === 'password') {
      setWarning({ isDisplayed: false, warningMessage: '', type: '' })
    }
  };

  const handleLogin = () => {
    const userListString: string = localStorage.getItem('user') || '[]';
    const userList: User[] = JSON.parse(userListString)

    // check if the provided e-mail exists

    if (!userList.some(el => el.email === userEmail)) {
      setWarning({
        isDisplayed: true,
        warningMessage: 'No user with this e-mail exists. Please provide the correct e-mail or register.',
        type: 'e-mail'
      })

      return;
    }

    const foundUser = userList.find(el => el.email === userEmail && el.password === userPassword)

    // check if password is correct

    if (!foundUser) {
      setWarning({
        isDisplayed: true,
        warningMessage: 'Password is incorrect!',
        type: 'password'
      })

      return;
    } else {
      dispatch(setUser(foundUser))
      setUserEmail('')
      setUserPassword('')
      navigate('/');
    }
  }

  const handleSignUp = () => {
    if (userPassword.length < 8) {
      setWarning({
        isDisplayed: true,
        warningMessage: 'Password should be at least 8 digits long!',
        type: 'password'
      })
      return;
    }

    const usersInfo = JSON.stringify([{
      email: userEmail,
      password: userPassword,
      history: [],
      favorites: [],
      id: Number(new Date()),
    }, ...JSON.parse(localStorageUser)]);

    localStorage.setItem('user', usersInfo);
    setUserEmail('');
    setUserPassword('');
    navigate('/signin');
  }

  // render elements

  let submitButtonText;

  if (isLoginPage) {
    submitButtonText = "Log In";
  } else {
    submitButtonText = "Sign Up";
  }
  let submitButton = (
    <button
      className="authForm_submitButton"
      type="submit"
    >
      {submitButtonText}
    </button>
  );

  useEffect(()=>{
    toggleTheme()
  },[])

  return (
    <div className="authForm_outerContainer">
      <form
        className="authForm"
        onSubmit={onSubmit}
      >
        <h3>{submitButtonText}</h3>
        <div>
          <div className="authForm_input_title">Your Email:</div>
          <input
            value={userEmail}
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
            value={userPassword}
            name="password"
            className="authForm_input"
            type="password"
            placeholder="Password"
            onChange={passwordOnChange}
            required
          />
        </div>
        {submitButton}
        {warningField.isDisplayed &&
          <span
            className="authForm_warningField"
          >
            Warning: {warningField.warningMessage}
          </span>
        }
        <div
         className="authForm_redirect"
        >
          <span>{isLoginPage ? "Don't have an account yet? " : "Already have an account? "}</span>
          <Link to={isLoginPage ? "/signup" : "/signin"}>
            {isLoginPage ? "Sign Up" : "Log in"}
          </Link>
        </div>
        <div>
          <button className="authForm_toggleButton" onClick={toggleTheme}>
            Change color
          </button>
        </div>
      </form>
    </div>
  );
}
