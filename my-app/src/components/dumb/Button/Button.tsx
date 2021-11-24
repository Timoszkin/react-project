import './Button.css'

type ButtonProp = {
  classname: string,
  text: string
}

function Button({classname, text}: ButtonProp) {
  return (
    <button type="button" className={`button button-${classname}`}>{text}</button>
  )
}

export default Button;