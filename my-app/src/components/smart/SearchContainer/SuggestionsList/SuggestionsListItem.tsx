import { Link } from 'react-router-dom';
import { Movie } from '../../../../api/types';

function SuggestionsListItem({ id, title, releaseDate }: Movie) {
  const path = `/movie/${id}`;
  const year = releaseDate.slice(0, 4);

  return (
    <li className="search-list__item">
      <Link to={path}>{`${title} (${year})`}</Link>
    </li>
  );
}

export default SuggestionsListItem;