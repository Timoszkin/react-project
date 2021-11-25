import { debounce } from '../../../app/utils';
import SearchForm from "../../dumb/SearchForm/SearchForm";
import SearchSuggestionsList from "../../dumb/SearchSuggestionsList/SearchSuggestionsList";
import { ChangeEvent, FormEvent } from 'react';

function SearchContainer() {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value); // for tests only
    // call API for data
    // format data
    // show data in the searchSuggestionsList
  };
  const debouncedHandleInputChange = debounce(handleInputChange, 1500);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit'); // for tests only
    // save search history (local storage)
    // call API for data
    // format data
    // show search results (?)
  };

  const testItems = [
    {id: 0, title: 'Title 1'}, 
    {id: 1, title: 'Title 2'}, 
    {id: 2, title: 'Title 3'},
    {id: 3, title: 'Title 4'}, 
    {id: 4, title: 'Title 5'}, 
    {id: 5, title: 'Title 6'}
  ]; // for tests only

  return (
    <div>
      <SearchForm 
        submitHandler={handleFormSubmit} 
        inputChangeHandler={debouncedHandleInputChange}
      />
      <SearchSuggestionsList items={testItems}/>
    </div>
  );
}

export default SearchContainer;