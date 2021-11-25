import { ChangeEventHandler, FormEventHandler } from 'react';
import { ReactComponent as Icon } from './icon.svg';
import './SearchForm.css';

type SearchFormProps = {
  submitHandler: FormEventHandler, 
  inputChangeHandler: ChangeEventHandler
}

function SearchForm(
  {submitHandler, inputChangeHandler}: SearchFormProps
) {
  return (
    <form 
      className='search-form'
      onSubmit={submitHandler}
    >
      <input 
        className='search-form__input' 
        type='text' 
        placeholder='Type something'
        onChange={inputChangeHandler}
      />
      <button 
        className='search-form__btn' 
        type='submit'
      >
        <Icon/>
      </button>
    </form>
  );
}

export default SearchForm;