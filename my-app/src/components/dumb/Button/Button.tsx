import './Button.css'

type ButtonProp = {
  text: string,
  funcClick: any
}

function Button({ text, funcClick }: ButtonProp) {
  return (
    <button type='button' className='button' onClick={funcClick}>{text}</button>
  )
}

export default Button;