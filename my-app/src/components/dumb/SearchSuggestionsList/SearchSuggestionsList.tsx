import { Link } from 'react-router-dom';
import { useGetMoviesByTitleQuery } from '../../../api/movieSlice';
import { Movie } from '../../../api/types';
import './SearchSuggestionsList.css';

type SearchSuggestionsListProps = {
  searchValue: string,
}

function SearchSuggestionsList(
  {searchValue}: SearchSuggestionsListProps
) {
  const { 
    data: movies = [],
    isFetching,
    isSuccess,
    isError
  } = useGetMoviesByTitleQuery(searchValue);

  let content;
  if (isFetching) {
    content = (
      <li className='search-list__item search-list__item_loading'>
        Loading...
      </li>
    );
  } else if (isSuccess) {
    content = (movies.length > 0) ?
      movies.slice(0, 5).map((movie) => 
        <SearchSuggestionsItem key={movie.id} {...movie}/>
      ) : (
        <li className='search-list__item search-list__item_no-results'>
          Nothing found
        </li>
      );
  } else if (isError) { 
    content = (
      <li className='search-list__item search-list__item_error'>
        Oops, something went wrong
      </li>
    );
  }
  
  return (
    <div className='search-list'>
      <ul className='search-list__list'>
        {content}
      </ul>
    </div>
  );
}

function SearchSuggestionsItem(
  {id, title, releaseDate}: Movie
) {
  const path = `/movie/${id}`;
  const year = releaseDate.slice(0, 4);

  return (
    <li className='search-list__item'>
      <Link to={path}>
        {`${title} (${year})`}
      </Link>
    </li>
  );
}

export default SearchSuggestionsList;