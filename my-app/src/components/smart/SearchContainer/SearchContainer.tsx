import { useRef, FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Movie } from '../../../api/types';
import { debounce } from '../../../app/utils';
import SearchForm from "../../dumb/SearchForm/SearchForm";
import SearchSuggestionsList from "../../dumb/SearchSuggestionsList/SearchSuggestionsList";
const DEBOUNCE_DELAY = 800;

function SearchContainer() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
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
  console.log('searchValue',searchValue)
  const debouncedSetSearchValue = useCallback(
    debounce(setSearchValue, DEBOUNCE_DELAY)
  , []);
  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('submit'); // for tests only
      // save search history (local storage)
      // call API for data
      // format data
      // show search results (?)
      if(searchValue.length !== 0)
        navigate(`/movie?search/query=${searchValue}`)
      else
        navigate(`/`)  
  }, [searchValue]);

  return (
    <div ref={searchRef}>
      <SearchForm 
        submitHandler={handleFormSubmit}
        showSuggestionsCallback={setShowSuggestions} 
        setSearchValueCallback={debouncedSetSearchValue}
      />
      {searchValue && showSuggestions &&
        <SearchSuggestionsList searchValue={searchValue}/>}
    </div>
  );
}

export default SearchContainer;