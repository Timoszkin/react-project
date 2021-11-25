import './SearchSuggestionsList.css';

type SearchSuggestionsListProps = {
  items: object[]
}

type ItemObject = {
  [key: string]: any
}

function SearchSuggestionsList(
  {items}: SearchSuggestionsListProps
) {
  const elements = items.length > 5 ? items.slice(0, 5) : items;
  
  return (
    <div className='search-list'>
      <ul className='search-list__list'>
        {elements.map((el: ItemObject) => (
          <li 
            className='search-list__item'
            key={el.id}
          >
            <a href='#'>{el.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchSuggestionsList;