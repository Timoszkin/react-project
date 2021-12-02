import { ChangeEvent, FormEventHandler } from 'react';
import { ReactComponent as Icon } from './icon.svg';
import './SearchForm.css';

type SearchFormProps = {
  submitHandler: FormEventHandler;
  setSearchValueCallback: Function;
  showSuggestionsCallback: Function;
};

function SearchForm({
  submitHandler,
  setSearchValueCallback,
  showSuggestionsCallback,
}: SearchFormProps) {
  return (
    <form className="search-form" onSubmit={submitHandler}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Search movie"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchValueCallback(event.target.value)
        }
        onFocus={() => showSuggestionsCallback(true)}
      />
      <button className="search-form__btn" type="submit">
        <Icon />
      </button>
    </form>
  );
}

export default SearchForm;
