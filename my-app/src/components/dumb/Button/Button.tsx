import { useDispatch } from 'react-redux'
import { resetUser } from '../../../features/user/userSlice'
import './Button.css'


type ButtonProp = {
  text: string
}

function Button({ text }: ButtonProp) {
  const dispatch = useDispatch();
  const signOut = () => {
    if (text === 'Выйти') {
      dispatch(resetUser())
    }
  }

  return (
    <button
      type='button'
      className='button'
      onClick={signOut}
    >
      {text}
    </button>
  )
}

export default Button;
