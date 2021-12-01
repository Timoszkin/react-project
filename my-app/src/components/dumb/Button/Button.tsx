import "./Button.css";

type ButtonProp = {
  text: string;
  handleClick?: VoidFunction;
};

function Button({ text, handleClick }: ButtonProp) {
  const onClick = () => {
    if (handleClick) {
      handleClick();
    }
  };
  return (
    <button type="button" className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
