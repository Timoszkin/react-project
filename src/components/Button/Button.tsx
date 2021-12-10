import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import "./Button.css";

export function Button(props: any) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const onClick = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  };

  const style = {
    backgroundColor: props.backgroundColor,
    width: props.width,
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    color: props.color,
  };

  return (
    <button type="button" className={ theme === 'light' ? "button" : "button_dark" } onClick={onClick} style={style}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
