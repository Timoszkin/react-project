import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../../features/user/userSlice";
import "./AuthForm.css";
import { User } from "../../../types/User";

type AuthFormProp = {
  isLoginPage: boolean;
};

export default function AuthForm({ isLoginPage }: AuthFormProp) {
  const dispatch = useDispatch();
  // const [isLoginPage, setIsLoginPage] = useState(true);
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
      console.log(foundUser);
      
      dispatch(setUser(foundUser))
      setUserEmail('')
      setUserPassword('')
      // after login move to main page
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
    }, ...JSON.parse(localStorageUser)]);

    localStorage.setItem('user', usersInfo);
    setUserEmail('');
    setUserPassword('');
  }

  // render elements

  let submitButtonText;
  let loginSignupToggleButton;

  if (isLoginPage) {
    submitButtonText = "Log In";
    loginSignupToggleButton = "Switch to Register";
  } else {
    submitButtonText = "Sign Up";
    loginSignupToggleButton = "Switch to Log In";
  }
  let submitButton = (
    <button
      className="authForm_submitButton"
      type="submit"
    >
      {submitButtonText}
    </button>
  );

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
      </form>
    </div>
  );
}
