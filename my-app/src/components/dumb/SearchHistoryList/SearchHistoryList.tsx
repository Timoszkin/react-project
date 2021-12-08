import { Link } from "react-router-dom";
import "./SearchHistoryList.css";

type HistoryResults = {
  path: string;
  text: string;
};

type SearchHistoryListProps = {
  results: HistoryResults[];
};

export const SearchHistoryList = (props: SearchHistoryListProps) => {
  const { results } = props;

  return (
    <ul className="search-history-list">
      {results.map(({ path, text }) => (
        <li key={path}>
          <Link to={path}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};
