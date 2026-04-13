const list = [
  {
    objectID: 0,
    url: "/home",
    title: "Apple",
    author: "Steve Jobs",
    num_comments: 3,
    points: 9,
  },
];

function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title} </a>
            </span>
            <span>{item.author} </span>
            <span>{item.num_comments} </span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
