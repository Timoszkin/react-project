import { Link } from "react-router-dom";
import { Movie } from "../../../types/Movie";

function SuggestionsListItem({ id, title, releaseDate: year }: Movie) {
  const path = `/movie/${id}`;

  return (
    <li className="search-list__item">
      <Link to={path}>{`${title} (${year})`}</Link>
    </li>
  );
}

export default SuggestionsListItem;
