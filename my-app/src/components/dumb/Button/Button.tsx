import PropTypes from 'prop-types';
import "./Button.css";

function Button(props: any) {
  const onClick = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  };
  return (
    <button type="button" className="button" onClick={onClick}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
}

export default Button;
