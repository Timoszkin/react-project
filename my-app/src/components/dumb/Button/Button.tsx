import './Button.css'

type ButtonProp = {
  text: string,
  funcClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ text, funcClick }: ButtonProp) {
  return (
    <button type='button' className='button' onClick={funcClick}>{text}</button>
  )
}

export default Button;