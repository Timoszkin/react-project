import { useRef, FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { debounce } from '../../../app/utils';
import SearchForm from './SearchForm/SearchForm';
import SuggestionsList from './SuggestionsList/SuggestionsList';
import './SearchContainer.css';

const DEBOUNCE_DELAY = 800;

function SearchContainer() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const handleOuterClick = (event: MouseEvent) => {
    if (!searchRef?.current?.contains(event.target as Node)) {
      setShowSuggestions(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleOuterClick);
    return () => document.removeEventListener('click', handleOuterClick);
  }, []);

  const [searchValue, setSearchValue] = useState('');
  const debouncedSetSearchValue = useCallback(
    debounce(setSearchValue, DEBOUNCE_DELAY)
  , []);

  const navigate = useNavigate();
  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (searchValue.length !== 0) {
        navigate(`/search?query=${searchValue.trim().replaceAll(' ', '+')}`);
      }
    }
  , [searchValue]);

  return (
    <div className="search-container">
      <div className="search-container__inner" ref={searchRef}>
        <SearchForm
          submitHandler={handleFormSubmit}
          showSuggestionsCallback={setShowSuggestions}
          setSearchValueCallback={debouncedSetSearchValue}
        />
        {searchValue && showSuggestions && (
          <SuggestionsList searchValue={searchValue} />
        )}
      </div>
    </div>
  );
}

export default SearchContainer;