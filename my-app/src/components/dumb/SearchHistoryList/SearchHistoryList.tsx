
type HistoryResults = {
  link: string;
  query: string;
}

type SearchHistoryListProps = {
  results: HistoryResults[]
}

export const SearchHistoryList = (props: SearchHistoryListProps) => {
  const { results } = props;
  // wrap this in a Router component in order for it to transfer you to the result search or use <a> tag as a link
  return (
    <ul>
      {results.map(el => (
        <li
          key={el.link}
        >
          <a href={el.link}>
            {el.query}
          </a>
        </li>
      ))}
    </ul>
  )
}
