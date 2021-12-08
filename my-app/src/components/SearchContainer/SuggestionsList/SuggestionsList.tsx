import { useGetMoviesQuery } from "../../../api/movieSlice";
import SuggestionsListItem from "./SuggestionsListItem";
import "./SuggestionsList.css";

type SuggestionsListProps = {
  searchValue: string;
};

function SuggestionsList({ searchValue }: SuggestionsListProps) {
  const {
    data: movies = [],
    isFetching,
    isSuccess,
    isError,
  } = useGetMoviesQuery(searchValue);

  let content;
  if (isFetching) {
    content = (
      <li className="search-list__item search-list__item_loading">
        Loading...
      </li>
    );
  } else if (isSuccess) {
    content =
      movies.length > 0 ? (
        movies
          .slice(0, 5)
          .map((movie) => <SuggestionsListItem key={movie.id} {...movie} />)
      ) : (
        <li className="search-list__item search-list__item_no-results">
          Nothing found
        </li>
      );
  } else if (isError) {
    content = (
      <li className="search-list__item search-list__item_error">
        Oops, something went wrong
      </li>
    );
  }

  return (
    <div className="search-list">
      <ul className="search-list__list">{content}</ul>
    </div>
  );
}

export default SuggestionsList;
