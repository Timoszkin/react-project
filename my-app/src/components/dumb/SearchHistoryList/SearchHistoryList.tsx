
type SearchHistoryListProps = {
  results: {
    link: string;
    query: string;
  }[]
}

export const MovieList = (props: SearchHistoryListProps) => {
  const { results } = props;
// wrap this in a Router component in order for it to transfer you to the result search or use <a> tag as a link
  return (
    <ul>
      {results.map(el => (
      <li>
        <a href={el.link}>
          {el.query}
        </a>
      </li>
    ))}
    </ul>
  )
}
