import './Button.css'

type ButtonProp = {
  text: string
}

function Button({ text }: ButtonProp) {
  return (
    <button type="button" className={`button`}>{text}</button>
  )
}

export default Button;