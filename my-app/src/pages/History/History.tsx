import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { SearchHistoryList } from '../../components/dumb/SearchHistoryList/index';
import './History.css';

const SEARCH_PATH = '/search?query=';

function History() {
  const searchHistory = useSelector(
    (state: RootState) => state.userSlice.history
  );

  const historyRes = searchHistory.map((searchText) => ({
    path: SEARCH_PATH + searchText.trim().replaceAll(' ', '+'),
    text: searchText,
  }));

  return (
    <div className="history-page">
      <h2 className="history-page__title">Search history</h2>
      <SearchHistoryList results={historyRes} />
    </div>
  );
}

export default History;
