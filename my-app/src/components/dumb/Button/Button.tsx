import PropTypes from 'prop-types';
import "./Button.css";

 export function Button(props: any) {
  const onClick = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  };

  // for storybook
  const style = {
    backgroundColor: props.backgroundColor,
    width: props.width,
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    color: props.color
  }

  return (
    <button type="button" className="button" onClick={onClick} style={style}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
}

export default Button;
